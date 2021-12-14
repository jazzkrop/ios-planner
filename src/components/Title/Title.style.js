import styled, { css } from 'styled-components'

const colors = {
  active: 'var()',
  disabled: 'var()'
}

const TitleStyled = styled.div`
  color: var(${(props) => props.color || '--dark-lighten-5'});
  font-weight: ${(props) => (props.thin ? '400' : 'bold')};
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
export { TitleStyled }
