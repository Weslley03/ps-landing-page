import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '../landing/Header'
import { Footer } from '../landing/Footer'
import { COMPANY } from '../../data/company'
import styles from './LegalPage.module.css'

export interface LegalSection {
  id: string
  heading: string
  body: ReactNode
}

interface LegalPageProps {
  title: string
  /** Data de última atualização (texto livre, ex.: "22 de junho de 2026"). */
  updatedAt: string
  intro: ReactNode
  sections: LegalSection[]
}

/** Layout reutilizável para páginas legais (Termos, Privacidade). */
export function LegalPage({ title, updatedAt, intro, sections }: LegalPageProps) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.shell}>
        <Link to='/' className={styles.back}>
          <ArrowLeft size={16} /> Voltar para o início
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Última atualização: {updatedAt}</p>
          <p className={styles.intro}>{intro}</p>
        </header>

        <nav className={styles.toc} aria-label='Índice'>
          <span className={styles.tocTitle}>Índice</span>
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}>
              {i + 1}. {s.heading}
            </a>
          ))}
        </nav>

        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className={styles.section}>
            <h2 className={styles.heading}>
              {i + 1}. {s.heading}
            </h2>
            {s.body}
          </section>
        ))}

        <p className={styles.legalFooter}>
          {COMPANY.product} é operado por <strong>{COMPANY.legalName}</strong>, inscrita no CNPJ sob o nº {COMPANY.cnpj}.
        </p>
      </main>
      <Footer />
    </div>
  )
}
