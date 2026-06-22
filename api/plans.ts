import type { IncomingMessage, ServerResponse } from 'http'

// Serverless function da Vercel: o arquivo `api/plans.ts` vira o endpoint `/api/plans`.
// Auto-contido de propósito — não importa nada de fora de `api/` para não depender do
// bundling de arquivos externos da Vercel. A lógica é a mesma do BFF em
// `server/plansHandler.ts` (Express/Vite); se mudar uma, espelhe na outra.
// As envs API_BASE_URL/LANDING_API_TOKEN são lidas do ambiente da Vercel (dashboard),
// nunca do bundle do browser.
export default async function handler(_req: IncomingMessage, res: ServerResponse): Promise<void> {
  const apiBaseUrl = process.env.API_BASE_URL
  const token = process.env.LANDING_API_TOKEN

  if (!apiBaseUrl || !token) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Missing API_BASE_URL or LANDING_API_TOKEN on the server' }))
    return
  }

  try {
    const upstream = await fetch(`${apiBaseUrl}/api/v1/plans`, {
      headers: { 'x-landing-token': token },
    })

    if (!upstream.ok) {
      res.statusCode = 502
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: `Upstream responded ${upstream.status}` }))
      return
    }

    const body = (await upstream.json()) as { data?: unknown }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body.data ?? []))
  } catch {
    res.statusCode = 502
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to reach the plans API' }))
  }
}
