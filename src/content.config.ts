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
  // Marca la entrada como DESTACADA (aparece en "Más leídos").
  destacado: z.boolean().optional().default(false),
  // Orden opcional dentro de los destacados (menor = primero).
  ordenDestacado: z.number().optional(),
});

const devocionales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devocionales' }),
  schema: esquema,
});

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: esquema,
});

// Esquema para LIBROS: cada entrada es un CAPÍTULO.
// - "libro" es el nombre del libro al que pertenece (agrupa los capítulos).
// - "capitulo" es el número que define el ORDEN de lectura.
// La portada y la descripción del libro se toman del capítulo de menor
// número que tenga imagen / descripción (normalmente el capítulo 1).
const esquemaLibro = z.object({
  title: z.string(), // título del capítulo
  libro: z.string(), // nombre del libro (agrupa los capítulos)
  capitulo: z.coerce.number().optional(), // número de capítulo (orden)
  description: z.string().optional().default(''),
  pubDate: z.coerce.date().optional(),
  author: z.string().optional(),
  draft: z.boolean().optional().default(false),
  imagen: z.string().optional(),
  imagenAlt: z.string().optional().default(''),
  destacado: z.boolean().optional().default(false),
});

const libros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/libros' }),
  schema: esquemaLibro,
});

export const collections = { devocionales, articulos, libros };
