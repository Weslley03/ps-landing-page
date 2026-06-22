import type { CSSProperties } from 'react'
import { HERO_PLAYER, tierById } from '../../data/mock'
import { TierBadge } from '../ui/TierBadge'
import styles from './ShareCardMock.module.css'

/** Mock da imagem compartilhável gerada para o WhatsApp do grupo. */
export function ShareCardMock() {
  const tier = tierById(HERO_PLAYER.tier)
  return (
    <div className={styles.frame} style={{ '--tc': tier.color } as CSSProperties}>
      <div className={styles.head}>
        <span className={styles.group}>PELADA DA QUADRA · TEMPORADA 3</span>
        <span className={styles.tag}>DESTAQUE DA RODADA</span>
      </div>

      <div className={styles.body}>
        <div className={styles.overall}>
          <span className={styles.overallValue}>{HERO_PLAYER.overall}</span>
          <span className={styles.overallPos}>{HERO_PLAYER.position}</span>
        </div>
        <div className={styles.info}>
          <strong className={styles.name}>{HERO_PLAYER.name}</strong>
          <TierBadge tier={HERO_PLAYER.tier} />
          <span className={styles.line}>3 gols · 1 assistência · MVP</span>
        </div>
      </div>

      <div className={styles.foot}>
        <span>player·statistics</span>
        <span className={styles.share}>compartilhar no grupo →</span>
      </div>
    </div>
  )
}
