# AGENTS.md

Instrucciones para los agentes (Cursor y otros) que trabajen en este repositorio. Léelas antes de tocar nada y síguelas en cada tarea.

## Objetivo del repositorio

Este repositorio contiene los apuntes del **seminario de centro** «Herramientas corporativas» del IES Macià Abela (curso 2026-2027), sobre las herramientas corporativas de la Conselleria de Educación y la competencia digital docente. Se publican con MkDocs (tema Material) en GitHub Pages: <https://fjavier-hernandez.github.io/herramientas-corporativas/>.

El repositorio es **público**. Cada push a `main` puede desplegar la web (CI).

## Estructura

| Ruta | Contenido |
| --- | --- |
| `mkdocs.yml` | Configuración y `nav` |
| `docs/index.md` | Portada del seminario |
| `docs/sesiones/sesion-N.md` | Material de cada sesión (se añade cuando esté listo) |
| `docs/img/`, `docs/stylesheets/` | Imágenes y estilos |

## Compilar en local

```bash
pip install "mkdocs-material[imaging]" mkdocs-print-site-plugin
mkdocs build --strict
mkdocs serve
```

`mkdocs build --strict` no debe dar avisos de enlaces rotos. MkDocs construye **todos** los ficheros de `docs/`, aunque no estén en la `nav`: lo que no deba verse tiene que ir en `exclude_docs` o fuera de `docs/`.

## Estilo de los apuntes

Todo texto nuevo debe ser **prosa conceptual y cohesionada**: párrafos completos, con conectores que expliquen el porqué y enlacen una idea con la siguiente. Está prohibido el estilo telegráfico: no se admiten listas de fragmentos, frases sin verbo ni el formato «X: Y». Cada concepto se presenta explicando qué es, para qué sirve y cómo encaja en el conjunto antes de entrar en detalles, y el texto se centra en el tema que toca.

Cada párrafo tendrá entre **5 y 7 líneas** como máximo; si se alarga, se divide por ideas. El tono es profesional, sin coloquialismos, muletillas ni expresiones de chat. Se escribe en **castellano**. Las siglas se desarrollan la primera vez que aparecen en cada tema, por ejemplo «red de área local (LAN)». Lo que ya se explicó en otro tema se enlaza y no se repite. Se usan con mesura las admoniciones de Material (`!!! note`, `!!! tip`, `!!! warning`) y los bloques de código con el lenguaje indicado.

## Imágenes y diagramas

Las capturas que se leen mal (borrosas, pequeñas, con texto ilegible o con datos que no deben verse) se rehacen como diagramas SVG propios. Los SVG existentes no se quitan ni se sustituyen sin motivo. Las fotos reales de equipos o materiales llevan crédito (autor, fuente y licencia) en el pie de la figura. Toda imagen lleva un texto alternativo (`alt`) descriptivo. No se suben imágenes sin licencia de uso.

## Soluciones y autoevaluación

No se publican claves de pruebas ni datos de asistencia o evaluación del profesorado participante.

## Datos personales: nunca

El repositorio es público y todo lo que se suba puede leerlo cualquiera. **Nunca** se escriben ni se suben horarios del profesorado o de los grupos; nombres, notas, listas o cualquier otro dato del alumnado o de sus familias; DNI, NIA, correos o teléfonos personales; firmas o documentos firmados; ni rutas locales del ordenador del profesor (OneDrive, Obsidian, Descargas, etc.), credenciales, tokens ni claves.

Si una tarea necesita esos datos, se trabaja fuera del repositorio. Si encuentras alguno ya subido, avísalo en la descripción de la PR en vez de dejarlo pasar.

## Forma de trabajar con Git

Trabaja siempre en una **rama nueva** con un nombre descriptivo. Nunca hagas commit directamente en `main`. Cuando termines, abre una **pull request (PR)** con un resumen claro de lo que cambia y por qué. **No fusiones** la PR: la revisa Neo (o el profesor). Fusionar en `main` despliega la web automáticamente cuando hay CI. No despliegues el sitio (`deploy.sh`, `mkdocs gh-deploy`) salvo que se pida expresamente. Antes de abrir la PR, ejecuta `mkdocs build --strict` y revisa que en el diff no haya datos personales ni soluciones que no deban publicarse.

## Específico de este repositorio

- **Seminario de centro**, no un módulo de FP: el tono es para profesorado.
- Cada sesión nueva se añade en `docs/sesiones/` y en el bloque Sesiones de la `nav` cuando el material esté listo.
- No incluyas listados de asistentes, actas firmadas ni datos personales del claustro.
