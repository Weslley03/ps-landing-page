import { ArrowRight, Trophy } from 'lucide-react'
import { HERO_PLAYER } from '../../data/mock'
import { PlayerCard } from '../mockups/PlayerCard'
import styles from './Hero.module.css'

/** Hero: headline forte + CTAs + PlayerCard estilo FIFA como estrela. */
export function Hero() {
  return (
    <section className={styles.hero} id='topo'>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <Trophy size={13} /> A pelada com cara de profissional
          </span>

          <h1 className={styles.headline}>
            A sua pelada agora tem <span className={styles.accent}>ranking, overall e imersividade</span>.
          </h1>

          <p className={styles.sub}>
            O player-statistics transforma o fut7 da rapaziada em competição de verdade: estatísticas, overall, tiers e prêmios - organizados por grupo, do primeiro rachão à final
            da temporada.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href='#planos'>
              Criar meu grupo <ArrowRight size={16} />
            </a>
            <a className={styles.secondary} href='#funcionalidades'>
              Ver funcionalidades
            </a>
          </div>

          <dl className={styles.proof}>
            <div className={styles.proofItem}>
              <dt className={styles.proofValue}>0-99</dt>
              <dd className={styles.proofLabel}>Overall por jogador</dd>
            </div>
            <div className={styles.proofItem}>
              <dt className={styles.proofValue}>6</dt>
              <dd className={styles.proofLabel}>Tiers, do Fraco ao Lendário</dd>
            </div>
            <div className={styles.proofItem}>
              <dt className={styles.proofValue}>IA</dt>
              <dd className={styles.proofLabel}>Resenha pós-jogo</dd>
            </div>
          </dl>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden='true' />
          <PlayerCard player={HERO_PLAYER} featured />
        </div>
      </div>
    </section>
  )
}
