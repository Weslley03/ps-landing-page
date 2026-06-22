import type { CSSProperties } from 'react'
import { RANKING, tierById } from '../../data/mock'
import styles from './MiniLeaderboard.module.css'

const PODIUM_COLOR: Record<number, string> = {
  1: 'var(--gold)',
  2: 'var(--silver)',
  3: 'var(--bronze)',
}

/**
 * Mini-ranking: pódio ouro-prata-bronze + zona de classificação. Mesma régua do
 * Leaderboard do app (pontos = vitórias*3 + empates; aproveitamento sobre jogos).
 */
export function MiniLeaderboard() {
  const ranking = RANKING.map((row) => {
    const points = row.wins * 3 + row.draws
    const maxPoints = row.played * 3
    const percentage = maxPoints === 0 ? 0 : Math.round((points / maxPoints) * 100)
    return { ...row, points, percentage }
  })
    .sort((a, b) => b.points - a.points || b.percentage - a.percentage || b.wins - a.wins || a.losses - b.losses)
    .map((row, i) => ({ ...row, pos: i + 1 }))

  const podium = ranking.slice(0, 3)
  const rest = ranking.slice(3)
  // Ordem visual do pódio: 2º, 1º, 3º.
  const order = [podium[1], podium[0], podium[2]]

  return (
    <div className={styles.wrap}>
      <div className={styles.podium}>
        {order.map((row) => (
          <div key={row.pos} className={styles.column} data-pos={row.pos} style={{ '--pc': PODIUM_COLOR[row.pos] } as CSSProperties}>
            <div className={styles.dot} style={{ borderColor: tierById(row.tier).color }}>
              {row.name[0]}
            </div>
            <span className={styles.colName}>{row.name.split(' ')[0]}</span>
            <span className={styles.colPoints}>{row.points} pts</span>
            <div className={styles.bar}>
              <span className={styles.rank}>{row.pos}</span>
            </div>
          </div>
        ))}
      </div>

      <ul className={styles.list}>
        {rest.map((row) => (
          <li key={row.pos} className={styles.row}>
            <span className={styles.pos}>{row.pos}</span>
            <span className={styles.name}>{row.name}</span>
            <span className={styles.points}>{row.points} pts</span>
            <span className={styles.pct}>{row.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
