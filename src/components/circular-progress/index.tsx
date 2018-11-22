import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
  color: string;
  stroke: number;
  radius?: number;
  content?: string | number;
  progress: number;
}

const cx = classes.bind(css)

export function CircularProgress ({ color, radius = 60, stroke, content, progress }: P) {

  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI

  const strokeDashoffset = circumference - progress / 100 * circumference

  return (
    <div className={cx(css.progress)}>
      <div className={cx(css.value)}>{content}</div>

      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke={color}
          fill="transparent"
          className={cx(css.circle)}
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </div>
  )

}
