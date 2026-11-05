# app-hash
<<<<<<< HEAD

Laboratorio Pipelines — Arquitectura de Software (UCEVA).
Aplicación Angular con **Hash Location Strategy** desplegada en GitHub Pages mediante GitHub Actions.

## Vistas
- `/` Inicio
- `/about` Acerca de
- `/contact` Contacto

Ejemplo de URL: `https://USUARIO.github.io/app-hash/#/about`

## Despliegue
1. Crear un repositorio **público** en GitHub llamado `app-hash` (el nombre debe coincidir con el `--base-href`, que el workflow toma de `github.event.repository.name`).
2. En **Settings → Pages → Source** seleccionar **GitHub Actions**.
3. Hacer push a `main` o `master`; el pipeline (`.github/workflows/deploy.yml`) instala, prueba, compila y publica.

No requiere fallback 404: el servidor siempre recibe `index.html` porque la ruta va después del `#`.

## Comandos
```bash
npm install
npm start        # desarrollo
npm test         # pruebas unitarias
npm run build    # build de producción
```
=======
Taller bajo presión entrega rápida 
>>>>>>> bf96c1437e442df42837e86e829762e0db823163
