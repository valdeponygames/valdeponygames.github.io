# Web de Valdepony Games

Web escaparate para el perfil de desarrollador de Google Play. Es estática (HTML, CSS y JS), así que se aloja **gratis en GitHub Pages**.

## Qué hay en cada archivo

| Archivo | Para qué sirve |
|---|---|
| `js/config.js` | **El único archivo que tienes que editar**: nombre, email, textos y proyectos |
| `index.html` | Página principal (portada, proyectos, nosotros, contacto) |
| `privacidad/*.html` | Una política de privacidad por app, para pegar su URL en Google Play |
| `app-ads.txt` | Archivo que pide AdMob para Haur Jolasak (no lo borres) |
| `img/` | Logo y favicon |
| `img/proyectos/<app>/` | Icono, portada y capturas de cada app (las de la galería "Ver capturas") |
| `css/`, `js/main.js`, `js/privacy.js` | Diseño y lógica: no hace falta tocarlos |
| `404.html` | Página de "no encontrada" |

## Antes de publicar

1. El email de soporte y las redes sociales están en `js/config.js`. Si cambias el email, se actualiza solo en toda la web y en todas las políticas de privacidad.
2. Cuando una app salga en Google Play, pon `published: true` en su bloque y aparecerá el botón **Disponible en Google Play**.
3. Si tienes la URL de tu perfil de desarrollador de Google Play, ponla en `googlePlayDeveloperUrl`.
4. **Revisa las políticas de privacidad**: están redactadas a partir de lo que hace cada proyecto, pero tú eres el responsable de que sean ciertas.

## Publicar en GitHub Pages (gratis)

1. Crea una cuenta en <https://github.com> (gratis, sin tarjeta). El **nombre de usuario** formará tu dirección, por ejemplo `valdepony` → `valdepony.github.io`.
2. Pulsa **+ → New repository**.
   - **Repository name:** exactamente `TUUSUARIO.github.io` (por ejemplo `valdepony.github.io`).
   - Márcalo como **Public** y pulsa **Create repository**.
3. En la página del repositorio pulsa **uploading an existing file** y **arrastra todo el contenido de la carpeta `mi-web`** (los archivos y carpetas de dentro, no la carpeta `mi-web` en sí). Pulsa **Commit changes**.
4. Ve a **Settings → Pages** y comprueba que en *Source* pone **Deploy from a branch**, rama **main**, carpeta **/ (root)**.
5. En 1–2 minutos tu web estará en `https://TUUSUARIO.github.io`.

Para hacer cambios después: abre el archivo en GitHub, pulsa el lápiz ✏️, edita y pulsa **Commit changes**. O vuelve a arrastrar los archivos modificados.

> `app-ads.txt` solo funciona en la raíz del dominio, por eso el repositorio debe llamarse `TUUSUARIO.github.io` y no otra cosa.

## Qué poner en Google Play Console

| Campo | Valor |
|---|---|
| Sitio web (ficha de la app y perfil de desarrollador) | `https://TUUSUARIO.github.io` |
| Política de privacidad de Haur Jolasak | `https://TUUSUARIO.github.io/privacidad/haur-jolasak.html` |
| Política de privacidad de EuskaraWise | `https://TUUSUARIO.github.io/privacidad/euskarawise.html` |
| Política de privacidad de Hiru txirlo | `https://TUUSUARIO.github.io/privacidad/hiru-txirlo.html` |
| Política de privacidad de Mi Maleta | `https://TUUSUARIO.github.io/privacidad/mi-maleta.html` |
| Email de contacto | El mismo que pongas en `config.js` |

**AdMob:** en Play Console pon como sitio web de desarrollador `https://TUUSUARIO.github.io`. AdMob encontrará `https://TUUSUARIO.github.io/app-ads.txt` (puede tardar hasta 24 h en verificarlo).

## Añadir un proyecto nuevo

1. Crea la carpeta `img/proyectos/<nombre-del-proyecto>/` y pon dentro:
   - `icono.png`: cuadrado, de 256 px.
   - `portada.jpg`: banner apaisado de unos 1200×630 px (vale el gráfico destacado de Google Play).
   - Las capturas en JPG: de 720 px de ancho si son verticales o de 1280 px si son horizontales, para que la web cargue rápido.
2. En `js/config.js`, copia uno de los bloques `{ ... }` de `projects` y cambia sus datos: `folder`, `icon`, `cover` y la lista `screenshots`.
3. Si necesita política de privacidad, duplica una de `privacidad/` (la más parecida), cámbiale el nombre y los textos, y pon su ruta en `privacy`.
