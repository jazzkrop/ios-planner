import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

const IconWrapper = styled('Icon')`
  color: var(--dark-lighten-10);
  position: absolute;
  left: 8px;
  top: 4px;
  ${(props) => {
    switch (props.size) {
      case 'lg':
        return css`
          padding: 4px;
          font-size: var(--fz-mega-1);
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
          padding: 2px;
          font-size: var(--fz-title-2);
        `
    }
  }}
`

const InputStyled = styled.input`
  width: 100%;
  color: var(--white-default);

  ${(props) => {
    switch (props.size) {
      case 'lg':
        return css`
          padding: 4px;
          font-size: var(--fz-subtitle-1);
        `
      case 'md':
        return css`
          font-size: var(--fz-body-1);
        `
      case 'sm':
        return css`
          font-size: var(--fz-body-2);
        `
      default:
        return css`
          padding: 2px;
          font-size: var(--fz-subtitle-2);
        `
    }
  }}
  ${(props) => {
    switch (props.type) {
      case 'search':
        return css`
          background-color: var(--dark-lighten-4);
          border-radius: 6px;
          border: 3px solid transparent;
          padding-left: 32px;

          &:focus-visible {
            outline: none;
          }
          &:focus {
            border: 3px solid var(--blue-lighten-2);
          }
        `
      case 'transperent':
        return css`
          border: none;
          outline: none;
          background-color: transparent;
          color: ;
        `
      default:
        return css`
          background-color: transparent;
          outline: none;
          border-color: transparent;
          &:focus {
            background-color: var(--dark-default);
            border-style: solid;
            border-color: var(--blue-lighten-1);
            border-radius: 3px;
          }
          &:focus-visible {
            outline: none;
          }
        `
    }
  }}
`

export { InputStyled, IconWrapper, InputWrapper }
