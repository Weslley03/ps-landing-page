import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import { DREAM_TEAM, TIERS, tierById } from '../../data/mock'
import styles from './DreamTeamField.module.css'

/** Mini-campo do dream team: jogadores em campo com border/glow de tier aleatório. */
export function DreamTeamField() {
  // Cada montagem sorteia um tier por posição, só pra exibir as cores no campo.
  // Sem 'weak' (cinza), pra que o glow de tier sempre apareça vívido.
  const tiers = useMemo(() => {
    const pool = TIERS.filter((t) => t.id !== 'weak')
    return DREAM_TEAM.map(() => pool[Math.floor(Math.random() * pool.length)].id)
  }, [])

  return (
    <div className={styles.field} role='img' aria-label='Melhor escalação da temporada montada no campo'>
      <div className={styles.lines} aria-hidden='true'>
        <span className={styles.center} />
        <span className={styles.circle} />
        <span className={styles.boxTop} />
        <span className={styles.boxBottom} />
      </div>

      {DREAM_TEAM.map((player, i) => {
        const color = tierById(tiers[i]).color
        return (
          <div key={player.id} className={styles.player} style={{ left: `${player.x}%`, top: `${player.y}%`, '--tc': color } as CSSProperties}>
            <div className={styles.dotRing}>{player.name[0]}</div>
            <span className={styles.label}>{player.name}</span>
            <span className={styles.pos}>{player.position}</span>
          </div>
        )
      })}
    </div>
  )
}
