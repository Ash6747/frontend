import fs from 'fs'
import path from 'path'

const distAssets = 'dist/assets'

// 1️⃣ Find CSS file (index-*.css)
const cssFile = fs.readdirSync(distAssets)
    .find(f => f.endsWith('.css') && f.startsWith('index-'))

if (!cssFile) throw new Error('No CSS file found!')
const cssPath = path.join(distAssets, cssFile)

let css = fs.readFileSync(cssPath, 'utf8')

// 2️⃣ Replace font-display:block with swap for all fonts
css = css.replace(/font-display\s*:\s*block/g, 'font-display:swap')

// 3️⃣ Save CSS back
fs.writeFileSync(cssPath, css)
console.log(`✅ font-display: swap applied in ${cssFile}`)

// 4️⃣ Optional: fix HTML render-blocking CSS link in index.html
const indexHtmlPath = 'dist/index.html'
let html = fs.readFileSync(indexHtmlPath, 'utf8')

// Find the same CSS link in HTML and replace with preload + noscript
html = html.replace(
    /<link\s+rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/,
    `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'">
   <noscript><link rel="stylesheet" href="$1"></noscript>`
)

fs.writeFileSync(indexHtmlPath, html)
console.log('✅ CSS preload + noscript applied in index.html')
