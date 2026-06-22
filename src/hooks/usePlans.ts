import { useEffect, useState } from 'react'
import { fetchPlans, type DisplayPlan } from '../data/plans'

interface UsePlansState {
  plans: DisplayPlan[]
  loading: boolean
  error: boolean
  reload: () => void
}

/** Carrega os planos do BFF, com estados de loading/erro e retry. */
export function usePlans(): UsePlansState {
  const [plans, setPlans] = useState<DisplayPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let active = true
    fetchPlans()
      .then((data) => {
        if (active) setPlans(data)
      })
      .catch(() => {
        if (active) setError(true)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [reloadKey])

  const reload = () => {
    setLoading(true)
    setError(false)
    setReloadKey((k) => k + 1)
  }

  return { plans, loading, error, reload }
}
