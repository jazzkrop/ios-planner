import styled, { css } from 'styled-components'

const TextStyled = styled.p`
  color: ${(props) =>
    props.color ||
    (props.disabled && 'var(--dark-lighten-6)') ||
    'var(--dark-lighten-10)'};
  line-height: ${(props) => props.lineHeight || null};

  ${(props) => {
    if (props.isElipsis) {
      return css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `
    }
  }};
`
export { TextStyled }
