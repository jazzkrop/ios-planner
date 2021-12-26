import styled, { css } from 'styled-components'

const TitleStyled = styled.div`
  display: ${(props) =>
    props.display || props.align ? 'inline' : null || 'block'};
  color: ${(props) => props.color || 'var(--dark-lighten-5)'};
  font-weight: ${(props) => (props.thin ? '400' : 'var(--fw-500)')};
  /* vertical-align: ${(props) => props.align || null}; */
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
