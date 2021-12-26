import styled from 'styled-components'

const DividerStyled = styled.hr`
  border: 0;
  height: 1px;
  background: var(--dark-lighten-3);
  margin-right: ${(props) => (props.negativeRight ? '-32px' : null)};
`
export { DividerStyled }
