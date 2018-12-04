import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export type P = {
  type?: string;
  size?: 'small' | 'normal' | 'large';
  label?: string;
  icon?: boolean;
  info?: boolean;
  danger?: boolean;
  normal?: boolean;
  success?: boolean;
  primary?: boolean;
  warning?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  handleClick?: () => void | boolean;
}

const cx = classes.bind(css)

export function Button ({ type, size = 'small', circle, label, loading, children, handleClick, ...rest }: P) {
  const {
    info,
    danger,
    normal,
    success,
    primary,
    warning,
  } = rest

  return (
    <button
      type={type}
      onClick={handleClick}
      className={cx(css.button, {
        info,
        normal,
        circle,
        danger,
        success,
        primary,
        warning,
        loading,
      },
      [ `size-${size}` ])}>
      {label || children}
    </button>
  )
}
