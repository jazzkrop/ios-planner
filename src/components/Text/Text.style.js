import styled, { css } from 'styled-components'

const colors = {
  active: 'var()',
  disabled: 'var()'
}

const TextStyled = styled.p`
  color: var(${(props) => props.variant || '--dark-lighten-10'});
  ${(props) => {
    if (props.isElipsis) {
      return css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `
    }
  }}
`
export { TextStyled }
