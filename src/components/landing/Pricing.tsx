import { Check, Sparkles, Users, CalendarRange } from 'lucide-react'
import { PLAN_INCLUDED } from '../../data/mock'
import { COMPANY, whatsappLink } from '../../data/company'
import { usePlans } from '../../hooks/usePlans'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Pricing.module.css'

/** Planos: 3 cards vindos da API. Tudo é igual em todos; o diferencial é jogadores e partidas. */
export function Pricing() {
  const { plans, loading, error, reload } = usePlans()

  return (
    <Section id='planos'>
      <SectionHeader
        eyebrow='Planos'
        title='Escolha o tamanho da sua disputa'
        subtitle='Todo recurso premium - IA, Squad League, múltiplos grupos, card compartilhável e suporte prioritário - vem em qualquer plano. O diferencial é só quantos jogadores e quantas partidas você quer.'
      />

      {loading && (
        <div className={styles.grid} aria-hidden='true'>
          {[0, 1, 2].map((i) => (
            <article key={i} className={`${styles.card} ${styles.skeleton}`} />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className={styles.error} role='alert'>
          <span>Não foi possível carregar os planos agora.</span>
          <button type='button' className={styles.retry} onClick={reload}>
            Tentar novamente
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className={styles.grid}>
          {plans.map((plan) => (
            <article key={plan.id} className={styles.card} data-recommended={plan.recommended}>
              {plan.recommended && (
                <span className={styles.ribbon}>
                  <Sparkles size={12} /> Recomendado
                </span>
              )}
              <div className={styles.head}>
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.audience}>{plan.audience}</p>
              </div>

              <div className={styles.price}>
                <span className={styles.priceValue}>{plan.price}</span>
                {plan.priceNote && <span className={styles.priceNote}>{plan.priceNote}</span>}
              </div>

              <ul className={styles.limits}>
                <li className={styles.limit}>
                  <Users size={16} />
                  <span>
                    <strong>{plan.players}</strong> jogadores
                  </span>
                </li>
                <li className={styles.limit}>
                  <CalendarRange size={16} />
                  <span>
                    <strong>{plan.matches}</strong>
                  </span>
                </li>
              </ul>

              <a
                className={styles.cta}
                href={whatsappLink(`Olá! Quero assinar o plano ${plan.name} do ${COMPANY.product} e criar meu grupo.`)}
                target='_blank'
                rel='noopener noreferrer'
                data-primary={plan.recommended}
              >
                Criar meu grupo
              </a>
            </article>
          ))}
        </div>
      )}

      <div className={styles.included}>
        <span className={styles.includedTitle}>Em todos os planos, sem exceção</span>
        <ul className={styles.includedList}>
          {PLAN_INCLUDED.map((feature) => (
            <li key={feature}>
              <Check size={15} /> {feature}
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.note}>Assine recorrente ou pague mês a mês via Pix. Cancele quando quiser.</p>
    </Section>
  )
}
