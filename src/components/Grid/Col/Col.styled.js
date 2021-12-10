import styled from 'styled-components'

//  sm: 540px,
//   md: 720px,
//   lg: 960px,
//   xl: 1140px,
//   xxl: 1320px

const ColStyled = styled.div`
  flex: ${(props) => (props.cw ? '0 0' : '1 0')};
  flex-basis: ${(props) => (props.cw / 12) * 100}%;
  background: green;
`
export default ColStyled
