// @ts-check
import { defineConfig } from 'astro/config';

// === CONFIGURACIÓN DEL SITIO ===
// El sitio ahora vive en el dominio propio sendareformada.com (raíz).
export default defineConfig({
  site: 'https://sendareformada.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
