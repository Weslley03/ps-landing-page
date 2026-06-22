import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { plansHandler } from './plansHandler'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

const app = express()

// BFF: o browser fala só com este endpoint (mesma origem); o token fica no servidor.
app.get('/api/plans', (req, res) => {
  void plansHandler(req, res)
})

app.use(express.static(distDir))

// Fallback SPA: qualquer rota não-/api devolve o index.html (react-router cuida do resto).
app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(join(distDir, 'index.html'))
})

const port = Number(process.env.PORT ?? 4173)
app.listen(port, () => {
  console.log(`ps-landing-page running on http://localhost:${port}`)
})
