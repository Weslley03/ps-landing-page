import { RADAR_ATTRS } from '../../data/mock'
import styles from './RadarMini.module.css'

const SIZE = 200
const CENTER = SIZE / 2
const RADIUS = 68
const N = RADAR_ATTRS.length
const GRID = [0.25, 0.5, 0.75, 1]

function axisAngle(i: number) {
  return ((i * 360) / N - 90) * (Math.PI / 180)
}

function polar(angle: number, r: number) {
  return {
    x: CENTER + r * Math.cos(angle),
    y: CENTER + r * Math.sin(angle),
  }
}

function buildPoints(values: number[]) {
  return values
    .map((v, i) => {
      const { x, y } = polar(axisAngle(i), v * RADIUS)
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')
}

/** Mini-radar do perfil, fiel ao RadarChart do app: 5 eixos normalizados 0-1. */
export function RadarMini() {
  const values = RADAR_ATTRS.map((a) => a.value)

  return (
    <svg className={styles.svg} viewBox={`0 0 ${SIZE} ${SIZE}`} role='img' aria-label='Radar de atributos do jogador'>
      {/* Anéis da grade */}
      {GRID.map((level) => (
        <polygon key={level} className={level === 1 ? styles.ringOuter : styles.ring} points={buildPoints(Array(N).fill(level))} />
      ))}

      {/* Eixos */}
      {RADAR_ATTRS.map((_, i) => {
        const { x, y } = polar(axisAngle(i), RADIUS)
        return <line key={i} className={styles.spoke} x1={CENTER} y1={CENTER} x2={x} y2={y} />
      })}

      {/* Polígono do jogador */}
      <polygon className={styles.area} points={buildPoints(values)} />
      {values.map((v, i) => {
        const { x, y } = polar(axisAngle(i), v * RADIUS)
        return <circle key={i} className={styles.vertex} cx={x} cy={y} r='2.5' />
      })}

      {/* Rótulos dos eixos */}
      {RADAR_ATTRS.map((attr, i) => {
        const { x, y } = polar(axisAngle(i), RADIUS + 16)
        return (
          <text key={attr.label} className={styles.label} x={x} y={y} textAnchor='middle' dominantBaseline='middle'>
            {attr.label}
          </text>
        )
      })}
    </svg>
  )
}
