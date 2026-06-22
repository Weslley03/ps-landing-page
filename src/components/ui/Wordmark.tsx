import styles from './Wordmark.module.css'

/** Wordmark do produto. Mark monocromático + nome - sem cor decorativa. */
export function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <span className={styles.mark} aria-hidden='true'>
        ps
      </span>
      <span className={styles.name}>
        player<span className={styles.dim}>·</span>statistics
      </span>
    </span>
  )
}
