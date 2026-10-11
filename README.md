# Senda Reformada

Sitio web para publicar artículos cristianos reformados, devocionales y
estudios bíblicos. Construido con [Astro](https://astro.build) y publicado
gratis en **GitHub Pages**.

- **Registro de todo el contenido**: cada entrada es un archivo `.md` dentro de
  `src/content/`. Nada se pierde; todo queda versionado en tu repositorio.
- **Menús y temáticas automáticas**: las secciones son *Devocionales* y
  *Artículos*. Las temáticas (subcategorías) se crean solas a partir del campo
  `categoria` de cada entrada.
- **Diseño sobrio y responsivo**, con modo claro/oscuro automático.

---

## 🚀 Cómo publicarlo en GitHub Pages (una sola vez)

1. **Crea el repositorio en GitHub**
   - Entra a <https://github.com/new>
   - Nombre del repositorio: **`senda-reformada`**
   - Déjalo **Público**. No marques "Add a README".
   - Clic en **Create repository**.

2. **Sube estos archivos al repositorio**

   Desde la carpeta del proyecto, en una terminal:

   ```bash
   git init
   git add .
   git commit -m "Primera versión de Senda Reformada"
   git branch -M main
   git remote add origin https://github.com/franciscov1988-droid/senda-reformada.git
   git push -u origin main
   ```

   > Si prefieres no usar la terminal, puedes arrastrar los archivos en la web
   > de GitHub con el botón **Add file → Upload files**. (Pero la terminal es
   > más cómoda para las siguientes publicaciones.)

3. **Activa GitHub Pages**
   - En tu repositorio, ve a **Settings → Pages**.
   - En **Build and deployment → Source**, elige **GitHub Actions**.
   - ¡Listo! Cada vez que subas cambios, el sitio se reconstruye y publica solo.

4. **Tu sitio quedará en:**

   ```
   https://franciscov1988-droid.github.io/senda-reformada
   ```

   (La primera publicación tarda uno o dos minutos. Puedes ver el progreso en
   la pestaña **Actions** del repositorio.)

---

## ✍️ Cómo publicar un artículo o devocional nuevo

1. Crea un archivo `.md` nuevo dentro de la carpeta correcta:
   - Devocionales → `src/content/devocionales/`
   - Artículos → `src/content/articulos/`

2. Empieza el archivo con este encabezado (se llama *frontmatter*):

   ```markdown
   ---
   title: "Título de tu entrada"
   description: "Un resumen de una o dos líneas."
   pubDate: 2026-10-11
   categoria: "Oración"
   ---

   Aquí va el texto de tu artículo, en formato Markdown.
   ```

3. **La temática se crea sola.** Si escribes `categoria: "Oración"` y antes no
   existía, el sitio generará automáticamente su página y la agregará al menú.
   Para agregar una temática nueva en el futuro, solo escribe su nombre aquí.

4. Guarda, y sube el cambio:

   ```bash
   git add .
   git commit -m "Nuevo artículo: Título de tu entrada"
   git push
   ```

   En uno o dos minutos el sitio se actualiza solo.

### Campos del encabezado

| Campo         | ¿Obligatorio? | Para qué sirve                                   |
|---------------|:-------------:|--------------------------------------------------|
| `title`       | Sí            | Título de la entrada.                            |
| `pubDate`     | Sí            | Fecha de publicación (formato `AAAA-MM-DD`).     |
| `categoria`   | Sí            | Temática. Crea su página y menú automáticamente. |
| `description` | No            | Resumen que aparece en las tarjetas.             |
| `author`      | No            | Si lo omites, usa el autor por defecto.          |
| `draft`       | No            | `true` oculta la entrada (borrador).             |

---

## ⚙️ Personalizar el sitio

Casi todo lo editable está en **un solo archivo**:
`src/data/site.js`

Ahí puedes cambiar:
- El **nombre** del sitio y el **lema**.
- El **autor** por defecto.
- Las **redes sociales** (agregar, quitar o cambiar enlaces).

Los colores y el diseño están en `src/styles/global.css` (al inicio, en la
sección `:root`).

---

## 💻 Ver el sitio en tu computadora (opcional)

Si quieres previsualizar antes de publicar:

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321/senda-reformada
```

Para construir la versión final localmente:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # la previsualiza
```

---

Soli Deo Gloria.
"# senda-reformada" 
