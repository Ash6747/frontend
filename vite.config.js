import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgecss from '@fullhuman/postcss-purgecss'

const asyncStylesheetLinks = () => ({
  name: 'async-stylesheet-links',
  apply: 'build',
  enforce: 'post',
  transformIndexHtml(html) {
    return html.replace(
      /<link\s+rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
      (_, beforeHref, href, afterHref) => {
        const attrs = `${beforeHref}${afterHref}`;

        return `<link rel="preload"${beforeHref}href="${href}"${afterHref} as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet"${attrs} href="${href}"></noscript>`;
      }
    );
  },
});

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), asyncStylesheetLinks()],
    css: {
      postcss: {
        plugins: [
          ...(command === 'build' ? [
            purgecss({
              content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
              safelist: {
                standard: [
                  'show', 'fade', 'active', 'collapsed', 'collapsing', 'open', 'visible', 'hidden', 'sticky', 'link-border',
                  'show--consent', 'show--preferences', 'disable--interaction', 'cc--anim', 'cc--rtl'
                ],
                deep: [
                  /^modal/,
                  /^swiper/,
                  /^fancybox/,
                  /^f-/,
                  /^aos/,
                  /^cc-/,
                  /^cc__/,
                  /^cm/,
                  /^pm/,
                  /^toggle__/,
                  /^cookie_cta/,
                  /show--preferences/,
                  /^Toastify/,
                  /^chat360/
                ]
              }
            })
          ] : [])
        ]
      }
    }
  }
})
