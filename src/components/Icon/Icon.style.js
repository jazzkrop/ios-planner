import styled, { css } from 'styled-components'

const IconStyle = styled.div`
  color: ${(props) => props.color || 'var(--white-default)'};
  border-radius: ${(props) => (props.rounded ? `50%` : null)};
  background: ${(props) => props.background || null};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    switch (props.size) {
      case 'xl':
        return css`
          padding: 4px;
          font-size: var(--fz-mega-1);
          max-height: var(--fz-mega-1);
        `
      case 'lg':
        return css`
          font-size: var(--fz-subtitle-1);
          height: 28px;
          width: 28px;
        `
      case 'md':
        return css`
          font-size: var(--lh-subtitle-1);
          height: 24px;
          width: 24px;
        `
      case 'sm':
        return css`
          font-size: var(--fz-body-1);
          height: 24px;
          width: 24px;
        `
      default:
        return css`
          font-size: var(--fz-title-2);
          max-height: var(--fz-title-2);
        `
    }
  }}
`
export default IconStyle
