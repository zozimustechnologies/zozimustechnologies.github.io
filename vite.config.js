import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

function generate404Html(routes) {
  const routesObj = Object.fromEntries(routes.map(r => [r.path, r.url]))
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Zozimus Technologies</title>
  <script>
    var externalRoutes = ${JSON.stringify(routesObj, null, 4)};
    var path = window.location.pathname.replace(/\\/$/, '');
    if (externalRoutes[path]) {
      window.location.replace(externalRoutes[path]);
    } else {
      sessionStorage.redirect = window.location.href;
      window.location.replace('/');
    }
  <\/script>
</head>
<body></body>
</html>
`
}

function externalRoutesPlugin() {
  const configPath = resolve(__dirname, 'src/externalRoutes.json')
  const outputPath = resolve(__dirname, 'public/404.html')

  function rebuild() {
    const routes = JSON.parse(readFileSync(configPath, 'utf-8'))
    writeFileSync(outputPath, generate404Html(routes), 'utf-8')
    console.log('[externalRoutes] Regenerated public/404.html')
  }

  return {
    name: 'external-routes',
    buildStart() { rebuild() },
    configureServer(server) {
      rebuild()
      server.watcher.add(configPath)
      server.watcher.on('change', (file) => {
        if (file === configPath) rebuild()
      })
    },
  }
}

export default defineConfig({
  plugins: [externalRoutesPlugin(), react()],
  base: '/',
})
