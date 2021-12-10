import styled, { css } from 'styled-components'

const ContainerStyled = styled.div`
  ${(props) => {
    switch (props.size) {
      case 'xl':
        return css`
          max-width: 1320px;
          margin: 0 auto;
        `
      default:
        return css`
          width: 100%;
        `
    }
  }}
`
export default ContainerStyled
