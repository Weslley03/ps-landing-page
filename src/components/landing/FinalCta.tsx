import { ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import styles from './FinalCta.module.css'

/** Faixa de conversão final reforçando "Criar meu grupo". */
export function FinalCta() {
  return (
    <Section>
      <div className={styles.band}>
        <div className={styles.glow} aria-hidden='true' />
        <h2 className={styles.title}>Vire lenda da pelada.</h2>
        <p className={styles.text}>Crie seu grupo, registre o primeiro jogo e deixe a resenha falar pelos números. É de graça pra começar.</p>
        <a className={styles.cta} href='#planos'>
          Criar meu grupo <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  )
}
