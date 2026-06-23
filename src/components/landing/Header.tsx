import { useEffect, useState } from 'react'
import { ExternalLink, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/mock'
import { PLATFORM_DEMO_URL } from '../../data/demo'
import { Wordmark } from '../ui/Wordmark'
import styles from './Header.module.css'

/** Header fixo e discreto: vira translúcido com blur ao rolar. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.inner}>
        <a className={styles.brand} href='/' aria-label='player-statistics - início'>
          <Wordmark />
        </a>

        <nav className={styles.nav} aria-label='Navegação principal'>
          {NAV_LINKS.map((link) => (
            <a key={link.href} className={styles.link} href={`/${link.href}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {PLATFORM_DEMO_URL && (
            <a className={styles.demo} href={PLATFORM_DEMO_URL} target='_blank' rel='noopener noreferrer'>
              Acessar plataforma <ExternalLink size={14} />
            </a>
          )}
          <a className={styles.cta} href='/#planos'>
            Criar meu grupo
          </a>
          <button type='button' className={styles.toggle} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label='Navegação mobile'>
          {NAV_LINKS.map((link) => (
            <a key={link.href} className={styles.mobileLink} href={`/${link.href}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          {PLATFORM_DEMO_URL && (
            <a className={styles.mobileDemo} href={PLATFORM_DEMO_URL} target='_blank' rel='noopener noreferrer' onClick={() => setOpen(false)}>
              Acessar plataforma <ExternalLink size={15} />
            </a>
          )}
          <a className={styles.mobileCta} href='/#planos' onClick={() => setOpen(false)}>
            Criar meu grupo
          </a>
        </nav>
      )}
    </header>
  )
}
