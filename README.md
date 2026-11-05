# Herramientas corporativas 26-27

Apuntes del seminario de centro «Herramientas corporativas 26-27», dirigido al profesorado del Instituto de Educación Secundaria (IES) Macià Abela. Durante el curso se trabajan las herramientas corporativas de la Conselleria de Educación y la competencia digital docente (CDD), esto es, los servicios con los que el centro se comunica, organiza la docencia y custodia la información del alumnado.

**Web de los apuntes:** <https://fjavier-hernandez.github.io/herramientas-corporativas/>

El material se publica sesión a sesión. En este momento puede consultarse la primera, dedicada a la identidad digital y al correo, y el índice de inicio deja ya el hueco de las diecinueve restantes para cuando se impartan.

## Compilar en local

El sitio está hecho con [MkDocs Material](https://squidfunk.github.io/mkdocs-material/). Para verlo en el ordenador hace falta instalar las mismas piezas que usa el flujo de publicación y arrancar el servidor local.

```bash
pip install "mkdocs-material[imaging]" Pillow cairosvg mkdocs-print-site-plugin mkdocs-social-plugin
mkdocs serve
```

Después, abre <http://127.0.0.1:8000> en el navegador.

La publicación la hace GitHub Actions al integrar cambios en `main`: genera el sitio y lo deja en la rama `gh-pages`. En el repositorio, Pages tiene que servir esa rama desde la carpeta raíz.
