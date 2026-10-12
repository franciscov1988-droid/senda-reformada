import { getCollection } from 'astro:content';

// Resuelve la ruta de una imagen de portada.
// - Si es una URL completa (http...), se usa tal cual.
// - Si es un nombre de archivo (ej. "portada.jpg"), se busca en
//   public/imagenes/ anteponiendo la ruta base del sitio.
export function rutaImagen(imagen) {
  if (!imagen) return null;
  // URL completa de internet: se usa tal cual.
  if (/^https?:\/\//i.test(imagen)) return imagen;
  // Ruta absoluta ya armada (ej. "/senda-reformada/imagenes/foto.jpg",
  // como la que escribe el panel Pages CMS): se usa tal cual.
  if (imagen.startsWith('/')) return imagen;
  // Nombre de archivo suelto (ej. "portada.jpg"): se busca en
  // public/imagenes/ anteponiendo la ruta base del sitio.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const ruta = imagen.startsWith('imagenes/') ? imagen : `imagenes/${imagen}`;
  return `${base}/${ruta}`;
}

// Convierte un texto en "slug" seguro para URL:
// "Doctrina Reformada" -> "doctrina-reformada"
export function aSlug(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Devuelve todas las entradas publicadas de una sección, ya ordenadas
// de más nueva a más antigua, descartando los borradores (draft: true).
export async function entradasDeSeccion(seccionId) {
  const entradas = await getCollection(seccionId, ({ data }) => !data.draft);
  return entradas
    .map((e) => ({
      ...e,
      seccion: seccionId,
      url: `/${seccionId}/${e.id}`,
    }))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Todas las entradas de todas las secciones, ordenadas por fecha.
export async function todasLasEntradas() {
  const porSeccion = await Promise.all(
    ['devocionales', 'articulos'].map((s) => entradasDeSeccion(s))
  );
  return porSeccion
    .flat()
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Lista de temáticas (categorías) presentes en una sección, con su
// conteo de entradas. Se calcula sola a partir del contenido.
export async function tematicasDeSeccion(seccionId) {
  const entradas = await entradasDeSeccion(seccionId);
  const mapa = new Map();
  for (const e of entradas) {
    const nombre = e.data.categoria;
    const slug = aSlug(nombre);
    if (!mapa.has(slug)) mapa.set(slug, { nombre, slug, cantidad: 0 });
    mapa.get(slug).cantidad += 1;
  }
  return [...mapa.values()].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
}

// Formatea una fecha en español: "11 de octubre de 2026"
export function formatearFecha(fecha) {
  return new Intl.DateTimeFormat('es-HN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(fecha);
}
