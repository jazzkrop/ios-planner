import styled, { css } from 'styled-components'

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  color: ${(props) => (props.color ? props.color : 'var(--dark-lighten-9)')};
  border: none;
  padding: 4px;
  border-radius: ${(props) =>
    props.shape === 'circle' ? 'var(--border-radius-rounded)' : '6px'};

  &:hover {
    --hover-color: ${(props) => props.hoverColor || 'var(--dark-lighten-3)'};
    background-color: ${(props) =>
      props.isHover ? 'var(--hover-color)' : null};
  }
  &:active {
    background: ${(props) => (props.isActive === 'true' ? '#ccc' : null)};
  }

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return css`
          font-size: var(--fz-body-2);
          font-weight: var(--fw-400);
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
          font-size: var(--fz-body-1);
          font-weight: var(--fw-400);
        `
    }
  }}
`
const IconWrapper = styled.div`
  margin-right: ${(props) => props.mr || 0}px;
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
export { ButtonStyled, IconWrapper }
