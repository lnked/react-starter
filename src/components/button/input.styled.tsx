import * as React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  outline: 0;
  cursor: pointer;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &:hover {
    border-color: #f00;
    background-color: #f00;
  }

  ${(props: any) => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

const Container = styled.div`
  text-align: center;
`

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

export function Button ({ type, size = 'small', circle, label, loading, children, handleClick, ...rest }: P) {
  return (
    <Container>
      <StyledButton
        type={type}
        onClick={handleClick}
        primary
      >
        {label || children}
      </StyledButton>
    </Container>
  )
}
