import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  children: ReactNode
  /** Painel translúcido ao redor da seção (usado nos diferenciais). */
  panel?: boolean
  className?: string
}

/** Wrapper de seção com o shell máximo (1200px) e respiro vertical. */
export function Section({ id, children, panel = false, className }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={[styles.shell, panel ? styles.panel : '', className ?? ''].filter(Boolean).join(' ')}>{children}</div>
    </section>
  )
}
