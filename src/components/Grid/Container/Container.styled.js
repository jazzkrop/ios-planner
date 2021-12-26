import styled from 'styled-components'

const ContainerSize = {
  xxl: `
    width: 100%;
    margin: 0 auto;
    @media(min-width:1400px) {
      max-width: 1320px;
    }
  `,
  xl: `
  width: 100%;
  margin: 0 auto;
  @media(min-width:1200px) {
    max-width: 1140px;
  }
  @media(min-width:1400px) {
    max-width: 1320px;
  }
  `,
  lg: `
  width: 100%;
  margin: 0 auto;
  @media(min-width: 992px) {
    max-width: 960px;
  }
  @media(min-width:1200px) {
    max-width: 1140px;
  }
  @media(min-width:1400px) {
    max-width: 1320px;
  }
  `,
  md: `
   width: 100%;
  margin: 0 auto;
  @media(min-width: 768px) {
    max-width: 720px;
  }
  @media(min-width: 992px) {
    max-width: 960px;
  }
  @media(min-width:1200px) {
    max-width: 1140px;
  }
  @media(min-width:1400px) {
    max-width: 1320px;
  }
  `,
  sm: `
  width: 100%;
  margin: 0 auto;
  @media(min-width: 576px) {
    max-width: 540px;
  }
  @media(min-width: 768px) {
    max-width: 720px;
  }
  @media(min-width: 992px) {
    max-width: 960px;
  }
  @media(min-width:1200px) {
    max-width: 1140px;
  }
  @media(min-width:1400px) {
    max-width: 1320px;
  }
  `,
  xs: `
  width: 100%;
  margin: 0 auto;
  @media(min-width: 576px) {
    max-width: 540px;
  }
  @media(min-width: 768px) {
    max-width: 720px;
  }
  @media(min-width: 992px) {
    max-width: 960px;
  }
  @media(min-width:1200px) {
    max-width: 1140px;
  }
  @media(min-width:1400px) {
    max-width: 1320px;
  }
  @media(max-width: 576px) {
    width: 100%;
  }
  `,
  fluid: `
    width: 100%;
  `
}

const ContainerStyled = styled.div`
  box-sizing: border-box;
  height: 100%;
  ${(props) => ContainerSize[props.size]}
`
export default ContainerStyled
