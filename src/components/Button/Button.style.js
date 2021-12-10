import styled from 'styled-components'

const ButtonStyle = styled.button`
  padding: ${(props) => props.padding || null};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || null};
  background: none;
  display: flex;
  align-items: center;
  border: none;
  color: ${(props) => props.color || 'var(--dark-lighten-3)'};
`
export default ButtonStyle
