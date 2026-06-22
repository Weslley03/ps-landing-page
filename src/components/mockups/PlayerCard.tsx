import type { CSSProperties } from 'react'
import { Crown } from 'lucide-react'
import type { Foot, Player } from '../../data/mock'
import { tierById } from '../../data/mock'
import styles from './PlayerCard.module.css'

interface PlayerCardProps {
  player: Player
  /** Card maior, usado como destaque no hero. */
  featured?: boolean
  /** Remove o teto de largura pra o card preencher a coluna (ex.: showcase). */
  block?: boolean
}

const FOOT_LABEL: Record<Foot, string> = { right: 'Destro', left: 'Canhoto' }

function initialsOf(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
}

/** Mini bandeira do Brasil inline (sem rede), espelhando a flag do card do app. */
function BrazilFlag() {
  return (
    <svg className={styles.flag} viewBox='0 0 28 20' role='img' aria-label='Brasil'>
      <rect width='28' height='20' fill='#009b3a' />
      <polygon points='14,2 26,10 14,18 2,10' fill='#ffdf00' />
      <circle cx='14' cy='10' r='4' fill='#002776' />
    </svg>
  )
}

/**
 * Card de jogador fiel ao app (player-statistics/PlayerCard): overall + posição,
 * avatar por iniciais, nome, tier, prêmios de MVP (coroa), país, número favorito,
 * clube, pé dominante e quick stats (jogos, gols, assist., aproveitamento).
 */
export function PlayerCard({ player, featured = false, block = false }: PlayerCardProps) {
  const tier = tierById(player.tier)

  const quickStats: { label: string; value: string | number }[] = [
    { label: 'Jogos', value: player.played },
    { label: 'Gols', value: player.goals },
    { label: 'Assist.', value: player.assists },
    { label: 'Aprov.', value: `${player.winRate}%` },
  ]

  return (
    <article className={styles.card} data-featured={featured} data-block={block} style={{ '--tc': tier.color } as CSSProperties}>
      <div className={styles.identity}>
        <div className={styles.overallBlock}>
          <span className={styles.overallBadge}>{player.overall}</span>
          <span className={styles.positionTag}>{player.position}</span>
        </div>

        <div className={styles.avatar} aria-hidden='true'>
          {initialsOf(player.name)}
        </div>

        <div className={styles.info}>
          <p className={styles.name}>{player.name}</p>
          <div className={styles.tags}>
            <span className={styles.tierLabel}>{tier.label}</span>
            {player.mvpCount > 0 && (
              <span className={styles.mvpBadge} title={`${player.mvpCount} prêmios de MVP`}>
                <Crown size={11} strokeWidth={2.5} /> {player.mvpCount}
              </span>
            )}
          </div>

          <div className={styles.meta}>
            <BrazilFlag />
            <span className={styles.metaItem} title={`Camisa ${player.shirtNumber}`}>
              <span className={styles.metaHash}>#</span>
              {player.shirtNumber}
            </span>
            <span className={styles.metaItem}>
              <span className={styles.metaFoot}>{FOOT_LABEL[player.dominantFoot]}</span>
            </span>
          </div>
        </div>

        <div className={styles.crest} aria-hidden='true' title='Clube'>
          {player.club}
        </div>
      </div>

      <div className={styles.quickStats}>
        {quickStats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
