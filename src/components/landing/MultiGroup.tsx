import { Boxes, ShieldCheck, UserPlus } from 'lucide-react'
import { Section } from '../ui/Section'
import styles from './MultiGroup.module.css'

const POINTS = [
  {
    icon: Boxes,
    title: 'Cada grupo é independente',
    text: 'Jogadores, temporadas e ranking próprios. Sua pelada de sábado não se mistura com o rachão diário da firma.',
  },
  {
    icon: ShieldCheck,
    title: 'Papéis de administração',
    text: 'A diretoria controla quem registra partidas, edita stats e encerra a temporada.',
  },
  {
    icon: UserPlus,
    title: 'Convites pra galera',
    text: 'Chame jogador novo por link. Ele entra, vê o próprio overall e já quer aparecer no próximo jogo.',
  },
]

/** Multi-grupo: reforça que cada pelada é um mundo à parte. */
export function MultiGroup() {
  return (
    <Section panel>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Multi-grupo</span>
          <h2 className={styles.title}>Organiza mais de uma pelada? Cada uma com a sua disputa.</h2>
          <p className={styles.text}>Ideal pra quem toca o rachão de sábado, a pelada da firma e o fut7 dos amigos - tudo no mesmo lugar, sem bagunçar os números.</p>
        </div>
        <ul className={styles.points}>
          {POINTS.map((point) => (
            <li key={point.title} className={styles.point}>
              <span className={styles.icon}>
                <point.icon size={18} />
              </span>
              <div>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointText}>{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
