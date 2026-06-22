import type { IncomingMessage, ServerResponse } from 'http'

/**
 * Proxy server-side dos planos. Lê o token só do env do servidor (nunca chega ao
 * browser nem ao bundle), chama a API e devolve o array de planos já desembrulhado
 * do envelope padrão (`{ data }`) da API. Usado tanto pelo Express (prod) quanto
 * pelo middleware do Vite (dev).
 */
export async function plansHandler(_req: IncomingMessage, res: ServerResponse): Promise<void> {
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
