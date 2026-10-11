// =====================================================================
//  CONFIGURACIÓN GENERAL DEL SITIO — Senda Reformada
//  Edita este archivo para cambiar nombre, lema, autor y redes sociales.
//  No necesitas tocar ningún otro archivo para esto.
// =====================================================================

export const SITE = {
  // Nombre del sitio (aparece en el encabezado y en la pestaña del navegador)
  nombre: 'Senda Reformada',

  // Lema o frase corta (aparece bajo el nombre y en la portada)
  lema: 'Caminando en la verdad de las Escrituras',

  // Descripción para buscadores (Google) y redes sociales
  descripcion:
    'Artículos cristianos reformados, devocionales y estudios bíblicos ' +
    'para edificación de la iglesia.',

  // Autor por defecto de las entradas
  autor: 'Paco',

  // Año de inicio (para el pie de página). El año final se calcula solo.
  anioInicio: 2026,
};

// =====================================================================
//  REDES SOCIALES Y CANALES
//  Para quitar una red, borra su línea. Para agregar otra, copia una
//  línea y cambia los datos. El ícono se elige con "icono".
//  Íconos disponibles: facebook, telegram, whatsapp, youtube,
//                       instagram, x, correo, enlace
// =====================================================================

export const REDES = [
  {
    nombre: 'Facebook',
    icono: 'facebook',
    url: 'https://www.facebook.com/senda.reformada',
  },
  {
    nombre: 'Telegram · Senda de Gracia',
    icono: 'telegram',
    url: 'https://t.me/sendadegracia',
  },
  {
    nombre: 'Telegram · Voces de Papel',
    icono: 'telegram',
    url: 'https://t.me/vocesdepapel',
  },
  {
    nombre: 'WhatsApp',
    icono: 'whatsapp',
    url: 'https://chat.whatsapp.com/Dw1BPOBE63bB00uiKEPnIT',
  },
  // Ejemplos para el futuro (descomenta y completa la URL):
  // { nombre: 'YouTube',   icono: 'youtube',   url: 'https://youtube.com/@tucanal' },
  // { nombre: 'Instagram', icono: 'instagram', url: 'https://instagram.com/tucuenta' },
  // { nombre: 'Correo',    icono: 'correo',    url: 'mailto:tucorreo@gmail.com' },
];

// =====================================================================
//  SECCIONES PRINCIPALES
//  Estas son las dos grandes áreas del sitio. Normalmente no necesitas
//  cambiarlas. Las TEMÁTICAS (subcategorías) NO se definen aquí: se
//  crean solas a partir del campo "categoria" de cada entrada.
// =====================================================================

export const SECCIONES = [
  {
    id: 'devocionales',
    nombre: 'Devocionales',
    descripcion: 'Reflexiones breves para alimentar el alma cada día.',
  },
  {
    id: 'articulos',
    nombre: 'Artículos',
    descripcion: 'Doctrina, estudios bíblicos y reflexiones a profundidad.',
  },
];
