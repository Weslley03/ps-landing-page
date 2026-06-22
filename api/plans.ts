import type { IncomingMessage, ServerResponse } from 'http'
import { plansHandler } from '../server/plansHandler'

// Serverless function da Vercel: o arquivo `api/plans.ts` vira o endpoint `/api/plans`.
// Reaproveita o MESMO handler do BFF usado pelo Express (prod local) e pelo Vite (dev).
// req/res da Vercel (runtime Node) estendem IncomingMessage/ServerResponse, então o
// handler funciona sem adaptação. As envs API_BASE_URL/LANDING_API_TOKEN são lidas do
// ambiente da Vercel (configuradas no dashboard), nunca do bundle do browser.
export default function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  return plansHandler(req, res)
}
