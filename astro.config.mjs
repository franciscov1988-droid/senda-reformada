// @ts-check
import { defineConfig } from 'astro/config';

// === CONFIGURACIÓN DEL SITIO ===
// Si en el futuro conectas un dominio propio (ej. sendareformada.com),
// cambia `site` a 'https://sendareformada.com' y pon `base: '/'`.
export default defineConfig({
  site: 'https://franciscov1988-droid.github.io',
  base: '/senda-reformada',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
