import type { TierId } from '../../data/mock'
import { tierById } from '../../data/mock'
import styles from './TierBadge.module.css'

interface TierBadgeProps {
  tier: TierId
}

/** Pill colorida com o nome do tier (mesma do app: fundo na cor, texto preto). */
export function TierBadge({ tier }: TierBadgeProps) {
  const t = tierById(tier)
  return (
    <span className={styles.badge} style={{ background: t.color }}>
      {t.label}
    </span>
  )
}
