import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
}

/** Cabeçalho padrão de seção: label em caps + título + subtítulo. */
export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <header className={styles.header} data-align={align}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  )
}
