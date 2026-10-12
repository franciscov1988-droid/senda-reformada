import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Esquema compartido por devocionales y artículos.
// "categoria" es la temática (subcategoría) y es libre: escribe la que
// quieras en cada entrada y el sitio creará su página automáticamente.
const esquema = z.object({
  title: z.string(),
  description: z.string().optional().default(''),
  pubDate: z.coerce.date(),
  categoria: z.string(),
  author: z.string().optional(),
  draft: z.boolean().optional().default(false),
  // Imagen destacada (portada) de la entrada. Opcional.
  // Puede ser el nombre de un archivo guardado en public/imagenes/
  // (ej. "portada.jpg") o una URL completa (ej. "https://...").
  imagen: z.string().optional(),
  // Texto alternativo de la imagen (para accesibilidad y SEO).
  imagenAlt: z.string().optional().default(''),
});

const devocionales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devocionales' }),
  schema: esquema,
});

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: esquema,
});

export const collections = { devocionales, articulos };
