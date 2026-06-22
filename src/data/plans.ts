/*
 * Planos vêm da API (via BFF em /api/plans). Este módulo define o contrato cru da
 * API e o mapeamento para o shape de exibição. Toda lógica de copy (preço formatado,
 * "ilimitadas", "Recomendado") é presentation e mora aqui.
 */

/** Shape devolvido pelo BFF (/api/plans), espelhando PlanResponseDto da API. */
export interface ApiPlan {
  id: number
  name: string
  description: string | null
  playerLimit: number
  matchLimit: number
  priceCents: number
}

/** Shape consumido pela seção de Planos. */
export interface DisplayPlan {
  id: string
  name: string
  audience: string
  players: string
  matches: string
  price: string
  priceNote?: string
  recommended?: boolean
}

/** Nome do plano destacado como "Recomendado" (comparação case-insensitive). */
const RECOMMENDED_PLAN_NAME = 'pro'

/** Acima disso, tratamos o limite de partidas como "ilimitado" (copy de marketing). */
const UNLIMITED_MATCHES_THRESHOLD = 999

const formatPrice = (priceCents: number): string =>
  priceCents === 0 ? 'Grátis' : `R$ ${(priceCents / 100).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`

const formatMatches = (matchLimit: number): string => (matchLimit >= UNLIMITED_MATCHES_THRESHOLD ? 'partidas ilimitadas' : `${matchLimit} partidas`)

export const mapPlan = (api: ApiPlan): DisplayPlan => ({
  id: String(api.id),
  name: api.name,
  audience: api.description ?? '',
  players: `até ${api.playerLimit}`,
  matches: formatMatches(api.matchLimit),
  price: formatPrice(api.priceCents),
  priceNote: api.priceCents > 0 ? '/mês' : undefined,
  recommended: api.name.toLowerCase() === RECOMMENDED_PLAN_NAME,
})

export async function fetchPlans(): Promise<DisplayPlan[]> {
  const res = await fetch('/api/plans')
  if (!res.ok) throw new Error(`Falha ao carregar planos (${res.status})`)
  const data = (await res.json()) as ApiPlan[]
  return data.map(mapPlan)
}
