import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reseta o scroll ao trocar de rota (mantém o comportamento de âncora `#hash`). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
