import { Link } from 'react-router-dom'
import { Wordmark } from '../ui/Wordmark'
import { NAV_LINKS } from '../../data/mock'
import { COMPANY } from '../../data/company'
import styles from './Footer.module.css'

/** Footer minimalista com borda superior sutil. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Wordmark />
          <p className={styles.tagline}>A pelada da rapaziada com cara de profissional.</p>
        </div>

        <nav className={styles.links} aria-label='Navegação do rodapé'>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={`/${link.href}`}>
              {link.label}
            </a>
          ))}
          <Link to='/termos'>Termos</Link>
          <Link to='/privacidade'>Privacidade</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} player·statistics. feito pra quem joga toda semana.</span>
        <span className={styles.legalName}>
          {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
        </span>
      </div>
    </footer>
  )
}
