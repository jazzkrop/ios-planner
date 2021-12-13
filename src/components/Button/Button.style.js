import styled, { css } from 'styled-components'

const TextWrapper = styled.div`
  margin-left: 5px;
`

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  color: ${(props) =>
    props.color ? `var(${props.color})` : 'var(--dark-lighten-9)'};
  border: none;
  padding: 4px;
  border-radius: ${(props) => (props.shape === 'circle' ? '50%' : '6px')};

  &:hover {
    background-color: ${(props) =>
      props.isHover === 'true' ? '#ebebeb' : null};
  }
  &:active {
    background: ${(props) => (props.isActive === 'true' ? '#ccc' : null)};
  }

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return css`
          font-size: var(--fz-body-2);
          font-weight: bold;
        `
      case 'md':
        return css`
          font-size: var(--fz-body-1);
        `
      case 'lg':
        return css`
          font-size: var(--fz-subtitle-1);
        `
      default:
        return css`
          font-size: 16px;
          font-weight: bold;
        `
    }
  }}
`
const IconWrapper = styled.div`
  display: flex;
  ${(props) => {
    switch (props.size) {
      case 'lg':
        return css`
          font-size: var(--fz-mega-2);
        `
      case 'md':
        return css`
          font-size: var(--fz-title-2);
        `
      case 'sm':
        return css`
          font-size: var(--fz-body-1);
        `
      default:
        return css`
          font-size: var(--fz-title-2);
        `
    }
  }}
`
export { ButtonStyled, TextWrapper, IconWrapper }
