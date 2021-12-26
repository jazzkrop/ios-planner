import styled from 'styled-components'

const CardStyled = styled.div`
  padding: var(--offset-4);
  border-radius: var(--border-radius-4);
  height: auto;
  &:focus,
  &:focus-within,
  &:active {
    background-color: var(--dark-lighten-5);
  }
`

export { CardStyled }
