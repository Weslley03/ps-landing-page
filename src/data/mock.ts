/*
 * Dados mockados da landing page. Nada de rede - tudo estático e fácil de
 * editar a partir deste único módulo.
 */

export type TierId = 'legendary' | 'elite' | 'great' | 'good' | 'average' | 'weak'

export interface Tier {
  id: TierId
  label: string
  color: string
  /** Overall mínimo do tier (referência de copy). */
  min: number
}

/** Escala de tiers, do topo para a base. */
export const TIERS: Tier[] = [
  { id: 'legendary', label: 'Lendário', color: 'var(--tier-legendary)', min: 90 },
  { id: 'elite', label: 'Elite', color: 'var(--tier-elite)', min: 80 },
  { id: 'great', label: 'Ótimo', color: 'var(--tier-great)', min: 70 },
  { id: 'good', label: 'Bom', color: 'var(--tier-good)', min: 60 },
  { id: 'average', label: 'Médio', color: 'var(--tier-average)', min: 50 },
  { id: 'weak', label: 'Fraco', color: 'var(--tier-weak)', min: 0 },
]

const TIER_BY_ID: Record<TierId, Tier> = TIERS.reduce(
  (acc, tier) => {
    acc[tier.id] = tier
    return acc
  },
  {} as Record<TierId, Tier>,
)

export const tierById = (id: TierId): Tier => TIER_BY_ID[id]

/** Deriva o tier a partir do overall (mesma lógica de faixas do app). */
export const tierFromOverall = (overall: number): Tier => TIERS.find((t) => overall >= t.min) ?? TIER_BY_ID.weak

export type Position = 'GOL' | 'ZAG' | 'LAT' | 'MEI' | 'ATA'

export type Foot = 'right' | 'left'

export interface Player {
  id: string
  name: string
  nickname?: string
  position: Position
  overall: number
  tier: TierId
  /** Sigla do clube mock exibida no brasão do card. */
  club: string
  shirtNumber: number
  dominantFoot: Foot
  mvpCount: number
  played: number
  goals: number
  assists: number
  /** Aproveitamento em % (vitórias sobre o total). */
  winRate: number
}

/** Card-estrela do hero. */
export const HERO_PLAYER: Player = {
  id: 'p-hero',
  name: 'Weslley',
  nickname: 'Foguete',
  position: 'ATA',
  overall: 91,
  tier: 'legendary',
  club: 'CLUB',
  shirtNumber: 10,
  dominantFoot: 'left',
  mvpCount: 6,
  played: 24,
  goals: 38,
  assists: 17,
  winRate: 79,
}

/** Jogadores usados em mockups (comparação, card, etc.). */
export const SAMPLE_PLAYERS: Player[] = [
  {
    id: 'p-1',
    name: 'Rafael Lima',
    nickname: 'Foguete',
    position: 'ATA',
    overall: 91,
    tier: 'legendary',
    club: 'CLUB',
    shirtNumber: 9,
    dominantFoot: 'right',
    mvpCount: 9,
    played: 24,
    goals: 38,
    assists: 17,
    winRate: 79,
  },
  {
    id: 'p-2',
    name: 'Diego Souza',
    nickname: 'Maestro',
    position: 'MEI',
    overall: 84,
    tier: 'elite',
    club: 'ZAP',
    shirtNumber: 10,
    dominantFoot: 'left',
    mvpCount: 6,
    played: 23,
    goals: 12,
    assists: 29,
    winRate: 71,
  },
]

/**
 * Mini-leaderboard com pódio + zona de classificação. Mesma régua do app
 * (Leaderboard.tsx): pontos = vitórias*3 + empates; aproveitamento = pontos /
 * (jogos*3). Temporada de 16 jogos por jogador.
 */
export interface RankingRow {
  name: string
  tier: TierId
  played: number
  wins: number
  draws: number
  losses: number
}

export const RANKING: RankingRow[] = [
  { name: 'Rafael Lima', tier: 'legendary', played: 16, wins: 12, draws: 2, losses: 2 },
  { name: 'Diego Souza', tier: 'elite', played: 16, wins: 11, draws: 1, losses: 4 },
  { name: 'Bruno Alves', tier: 'great', played: 16, wins: 10, draws: 2, losses: 4 },
  { name: 'Caio Mendes', tier: 'good', played: 16, wins: 9, draws: 1, losses: 6 },
  { name: 'Léo Castro', tier: 'good', played: 16, wins: 7, draws: 3, losses: 6 },
  { name: 'Tiago Rocha', tier: 'average', played: 16, wins: 6, draws: 2, losses: 8 },
]

export interface ScorerRow {
  name: string
  tier: TierId
  value: number
}

export const TOP_SCORERS: ScorerRow[] = [
  { name: 'Rafael Lima', tier: 'legendary', value: 38 },
  { name: 'Caio Mendes', tier: 'great', value: 24 },
  { name: 'Léo Castro', tier: 'good', value: 19 },
  { name: 'Julio Bonfim', tier: 'legendary', value: 12 },
  { name: 'Carlos Alves', tier: 'weak', value: 8 },
]

export const TOP_ASSISTS: ScorerRow[] = [
  { name: 'Diego Souza', tier: 'elite', value: 29 },
  { name: 'Bruno Alves', tier: 'great', value: 18 },
  { name: 'Tiago Rocha', tier: 'good', value: 14 },
  { name: 'Gabriel Lugieri', tier: 'great', value: 6 },
  { name: 'Uidi', tier: 'weak', value: 1 },
]

/** Dream team posicionado no campo (coordenadas em % do container). */
export interface FieldPlayer {
  id: string
  name: string
  position: Position
  tier: TierId
  /** 0 = esquerda, 100 = direita. */
  x: number
  /** 0 = topo (gol adversário), 100 = base (próprio gol). */
  y: number
}

export const DREAM_TEAM: FieldPlayer[] = [
  { id: 'd-gk', name: 'Pedro', position: 'GOL', tier: 'great', x: 50, y: 90 },
  { id: 'd-lb', name: 'Tiago', position: 'ZAG', tier: 'good', x: 26, y: 66 },
  { id: 'd-rb', name: 'Léo', position: 'ZAG', tier: 'good', x: 74, y: 66 },
  { id: 'd-cm', name: 'Diego', position: 'MEI', tier: 'elite', x: 38, y: 42 },
  { id: 'd-cm2', name: 'Bruno', position: 'MEI', tier: 'great', x: 62, y: 42 },
  { id: 'd-st', name: 'Rafael', position: 'ATA', tier: 'legendary', x: 50, y: 18 },
]

/**
 * Eixos do radar do perfil. Mesmos do app (RadarChart.tsx): gols, assistências,
 * MVP, vitórias e prêmios, com o valor normalizado de 0 a 1 frente ao grupo.
 */
export interface RadarAttr {
  label: string
  value: number
}

export const RADAR_ATTRS: RadarAttr[] = [
  { label: 'GOL', value: 0.92 },
  { label: 'AST', value: 0.55 },
  { label: 'MVP', value: 0.8 },
  { label: 'PRE', value: 0.6 },
  { label: 'VIT', value: 0.85 },
]

/** Sala de imprensa (IA): comentário + resposta do jogador (reply). */
export interface PressLine {
  author: string
  text: string
  /** Quando true, é a resposta do jogador (destacada em verde). */
  reply?: boolean
}

export const PRESS_ROOM: PressLine[] = [
  {
    author: 'Comentarista',
    text: 'Bruno fez 3, mas a defesa do Time B entregou de presente. Cadê a marcação?',
  },
  {
    author: 'Bruno responde',
    text: 'Reclama com quem tentou me marcar. Próxima eu faço 4.',
    reply: true,
  },
]

/** Declarações da torcida (IA): frase + autoria (torcida/arquibancada). */
export interface FanQuote {
  fan: string
  text: string
}

export const FAN_QUOTES: FanQuote[] = [
  { fan: 'Torcida Organizada', text: 'Léo correu mais que ônibus atrasado. Tier Elite é pouco.' },
  { fan: 'Arquibancada Sul', text: 'Davi prometeu hat-trick e fez falta no zelador.' },
]

/** Rodada de fantasy. O ranking é por usuário (cada um escala o seu time). */
export interface FantasyEntry {
  manager: string
  points: number
}

export const FANTASY_RANKING: FantasyEntry[] = [
  { manager: 'João Pedro', points: 312 },
  { manager: 'Marcos Vinícius', points: 298 },
  { manager: 'Vitor Hugo', points: 274 },
]

export const MOST_PICKED = [
  { name: 'Rafael Lima', tier: 'legendary' as TierId, pct: 82 },
  { name: 'Diego Souza', tier: 'elite' as TierId, pct: 64 },
  { name: 'Bruno Alves', tier: 'great' as TierId, pct: 51 },
]

/** Premiações de fim de temporada. */
export interface Award {
  title: string
  winner: string
  tier: TierId
}

export const SEASON_AWARDS: Award[] = [
  { title: 'Bola de Ouro', winner: 'Rafael Lima', tier: 'legendary' },
  { title: 'Luva de Ouro', winner: 'Pedro Henrique', tier: 'great' },
  { title: 'Garçom da Temporada', winner: 'Diego Souza', tier: 'elite' },
]

/*
 * Planos agora vêm da API (via BFF /api/plans). Tipos e mapeamento em
 * `src/data/plans.ts`; consumo via hook `usePlans`. PLAN_INCLUDED segue estático
 * por ser copy de marketing (igual em todos os planos).
 */

/** recursos inclusos em todos os planos (o diferencial é só jogadores e partidas). */
export const PLAN_INCLUDED: string[] = [
  'Overall 0-99 + tiers',
  'Ranking, artilheiros e garçons',
  'Dream team + premiações de temporada',
  'Sala de imprensa e declarações (IA)',
  'Squad League (fantasy)',
  'Card compartilhável',
  'Múltiplos grupos',
  'Prioridade no suporte',
]

export const NAV_LINKS = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
]
