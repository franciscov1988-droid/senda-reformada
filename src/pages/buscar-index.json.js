import { getCollection } from 'astro:content';
import { textoPlano } from '../data/contenido.js';
import { SECCIONES } from '../data/site.js';

// Genera /buscar-index.json con todo el contenido, que el buscador
// descarga una vez y filtra en el navegador.
export async function GET() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const secciones = ['devocionales', 'articulos'];
  const items = [];

  for (const sec of secciones) {
    const entradas = await getCollection(sec, ({ data }) => !data.draft);
    const nombreSec = SECCIONES.find((s) => s.id === sec)?.nombre || sec;
    for (const e of entradas) {
      items.push({
        titulo: e.data.title,
        resumen: e.data.description || '',
        categoria: e.data.categoria,
        seccion: nombreSec,
        url: `${base}/${sec}/${e.id}`,
        // cuerpo recortado para que el índice no pese demasiado
        texto: textoPlano(e.body || '').slice(0, 1200),
      });
    }
  }

  // Más recientes primero no importa aquí; el buscador ordena por relevancia.
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
