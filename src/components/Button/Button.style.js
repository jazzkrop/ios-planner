import styled from 'styled-components'

const ButtonStyle = styled.button`
  cursor: pointer;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : 'var(--fz-body-1)'};
  background: none;
  display: flex;
  align-items: center;
  border: none;
  color: ${(props) => (props.color ? props.color : 'var(--dark-lighten-3)')};
`
export default ButtonStyle
