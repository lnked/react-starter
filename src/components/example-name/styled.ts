import styled, { css } from 'styled-components'
import CommonStyles from 'theme/common-styles'

export const StyledDiv = styled.div`
  ${CommonStyles.themeColor};
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

export const StyledButton = styled.button``
