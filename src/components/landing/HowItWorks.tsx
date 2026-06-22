import { UsersRound, ClipboardList, Trophy } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    icon: UsersRound,
    title: 'Crie seu grupo',
    text: 'Monte a pelada, convide a galera e defina a diretoria. Cada grupo é um mundo à parte.',
  },
  {
    icon: ClipboardList,
    title: 'Registre as partidas',
    text: 'Placar, gols, assistências e escalação. Cada jogo alimenta os números da rapaziada.',
  },
  {
    icon: Trophy,
    title: 'Acompanhe e dispute',
    text: 'Ranking, overall, prêmios e resenha por IA. A competição ganha vida entre uma partida e outra.',
  },
]

/** Como funciona: 3 passos para tirar a fricção. */
export function HowItWorks() {
  return (
    <Section id='como-funciona'>
      <SectionHeader eyebrow='Como funciona' title='Da resenha do zap ao ranking em 3 passos' subtitle='Sem complicação. Em minutos a pelada já tem cara de campeonato.' />
      <ol className={styles.steps}>
        {STEPS.map((step, i) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.icon}>
              <step.icon size={20} />
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
