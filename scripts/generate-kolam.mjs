// Generates original kolam-style SVG artwork (white "rice flour" lines on a dark floor).
// Run with: npm run art
import { writeFileSync } from 'node:fs'

const INK = '#fff4e0'
const f = (n) => Number(n.toFixed(2))

const dot = (x, y, r = 3.2) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="${INK}" stroke="none"/>`
const circ = (x, y, r) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}"/>`
const polar = (r, deg) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)]
const rotated = (n, fn) =>
  Array.from({ length: n }, (_, i) => `<g transform="rotate(${f((360 / n) * i)})">${fn(i)}</g>`).join('')

function wrap(body, bg, size = 400, extra = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img">
<rect width="${size}" height="${size}" fill="${bg}"/>
<g fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>
${body}
</g></svg>`
}
const centred = (inner) => `<g transform="translate(200 200)">${inner}</g>`

// 1. Lotus: layered petals around a ring of dots
const lotus = () =>
  centred(
    rotated(12, () => `<path d="M0 -20 C 22 -55 22 -95 0 -130 C -22 -95 -22 -55 0 -20 Z"/>`) +
      rotated(12, () => `<path d="M0 -20 C 10 -45 10 -70 0 -92 C -10 -70 -10 -45 0 -20 Z" transform="rotate(15)"/>`) +
      circ(0, 0, 14) +
      rotated(24, () => dot(0, -158, 3)) +
      circ(0, 0, 176)
  )

// 2. Pulli kolam: diamond of dots with looping circles around each dot
const pulli = () => {
  const s = 52
  const out = []
  for (let i = -2; i <= 2; i++)
    for (let j = -2; j <= 2; j++) {
      const x = ((i - j) * s) / Math.SQRT2 + 0
      const y = ((i + j) * s) / Math.SQRT2
      out.push(circ(x, y, s * 0.36), dot(x, y, 3.4))
    }
  return centred(out.join('') + `<rect x="-170" y="-170" width="340" height="340" rx="6" transform="rotate(45) scale(0.82)"/>`)
}

// 3. Star: {8/3} star, nested squares and dot tips
const star = () => {
  const pts = (r, n, off = 0) => Array.from({ length: n }, (_, i) => polar(r, (360 / n) * i + off))
  const poly = (p) => p.map((q) => q.map(f).join(',')).join(' ')
  const outer = pts(140, 8, -90)
  let lines = ''
  for (let i = 0; i < 8; i++) {
    const a = outer[i]
    const b = outer[(i + 3) % 8]
    lines += `<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}"/>`
  }
  return centred(
    lines +
      `<polygon points="${poly(outer)}"/>` +
      circ(0, 0, 54) +
      circ(0, 0, 160) +
      outer.map((p) => dot(p[0], p[1], 5)).join('') +
      pts(172, 16).map((p) => dot(p[0], p[1], 2.6)).join('') +
      rotated(8, () => `<path d="M0 -54 Q 18 -80 0 -104 Q -18 -80 0 -54" />`)
  )
}

// 4. Rings: concentric dotted rings joined by petals
const rings = () =>
  centred(
    [8, 16, 24]
      .map((n, k) => {
        const r = 52 + k * 52
        return (
          Array.from({ length: n }, (_, i) => {
            const [x, y] = polar(r, (360 / n) * i)
            return dot(x, y, 3.4)
          }).join('') +
          rotated(n, () => `<path d="M${r} 0 q ${f(r * 0.18)} ${f(-r * 0.22)} ${f(r * 0.4)} 0 q ${f(-r * 0.18)} ${f(r * 0.22)} ${f(-r * 0.4)} 0" transform="rotate(${f(180 / n)}) translate(${f(-r * 0.2)} 0)"/>`)
        )
      })
      .join('') + circ(0, 0, 14)
  )

// 5. Sikku: interlaced sine chains forming a square border with a flower centre
const sikku = () => {
  const wave = (phase) => {
    const pts = []
    for (let x = -150; x <= 150; x += 5) pts.push(`${x},${f(14 * Math.sin((x / 150) * Math.PI * 4 + phase))}`)
    return `<polyline points="${pts.join(' ')}"/>`
  }
  const side = wave(0) + wave(Math.PI)
  const sides = [0, 90, 180, 270].map((a) => `<g transform="rotate(${a}) translate(0 -150)">${side}</g>`).join('')
  return centred(
    sides +
      rotated(8, () => `<ellipse cx="0" cy="-42" rx="16" ry="38"/>`) +
      circ(0, 0, 12) +
      [[-150, -150], [150, -150], [150, 150], [-150, 150]].map(([x, y]) => circ(x, y, 12) + dot(x, y, 3)).join('') +
      `<rect x="-172" y="-172" width="344" height="344" rx="10"/>`
  )
}

// 6. Kambi: a ring of looping vines
const kambi = () =>
  centred(
    rotated(10, () => `<path d="M0 -70 C 46 -90 46 -150 0 -150 C -46 -150 -46 -90 0 -70"/><path d="M0 -70 C 22 -92 22 -126 0 -126 C -22 -126 -22 -92 0 -70"/>` + dot(0, -166, 3.4)) +
      rotated(10, () => `<path d="M0 -70 Q 36 -52 52 -14" transform="rotate(18)"/>`) +
      circ(0, 0, 46) +
      circ(0, 0, 24) +
      dot(0, 0, 5)
  )

// 7. Hex: hexagonal lattice of overlapping loops
const hex = () => {
  const s = 56
  const out = []
  for (let row = -3; row <= 3; row++)
    for (let col = -3; col <= 3; col++) {
      const x = col * s + (Math.abs(row) % 2 ? s / 2 : 0)
      const y = row * s * 0.866
      if (Math.hypot(x, y) > 175) continue
      out.push(circ(x, y, s * 0.58), dot(x, y, 3))
    }
  return centred(out.join('') + circ(0, 0, 186))
}

// 8. Diya: nested rotated squares with corner dots and a lamp-flame centre
const diya = () =>
  centred(
    [150, 126, 102, 78].map((h, i) => `<rect x="${-h}" y="${-h}" width="${h * 2}" height="${h * 2}" transform="rotate(${i * 22.5})"/>`).join('') +
      rotated(8, () => dot(0, -176, 3.4)) +
      `<path d="M0 -40 C 22 -14 22 14 0 30 C -22 14 -22 -14 0 -40 Z"/>` +
      `<path d="M0 -14 C 8 -2 8 8 0 14 C -8 8 -8 -2 0 -14 Z"/>`
  )

const bgs = ['#5b1a1a', '#8c3a22', '#4a2a1c', '#6b1f2a', '#3e2418', '#7a2c1d', '#51201c', '#5f2a16']
const art = [lotus, pulli, star, rings, sikku, kambi, hex, diya]
art.forEach((fn, i) => writeFileSync(`src/assets/kolam/kolam-${i + 1}.svg`, wrap(fn(), bgs[i])))

// Hero: wide dark floor with a large lotus kolam on the right and soft dot border
{
  const W = 1600, H = 900
  const big = `<g transform="translate(1290 450) scale(2.1)">${lotus()
    .replace('<g transform="translate(200 200)">', '<g>')}</g>`
  const dots = Array.from({ length: 40 }, (_, i) => dot(40 + i * 40, 40, 2.4) + dot(40 + i * 40, H - 40, 2.4)).join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img">
<rect width="${W}" height="${H}" fill="#4a1616"/>
<g fill="none" stroke="${INK}" stroke-opacity="0.85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${big}</g>
<g opacity="0.7">${dots}</g></svg>`
  writeFileSync('src/assets/kolam/hero.svg', svg)
}

// Fallback image shown if any artwork fails to load
writeFileSync(
  'src/assets/kolam/fallback.svg',
  wrap(centred(circ(0, 0, 70) + circ(0, 0, 40) + rotated(8, () => dot(0, -100, 4))), '#5b1a1a')
)

// Favicon
writeFileSync(
  'public/favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#6b1f2a"/><g transform="translate(32 32)" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round">${rotated(8, () => `<path d="M0 -4 C 7 -12 7 -20 0 -26 C -7 -20 -7 -12 0 -4Z"/>`)}</g><circle cx="32" cy="32" r="3" fill="#e0916a"/></svg>`
)
console.log('Kolam artwork generated.')
