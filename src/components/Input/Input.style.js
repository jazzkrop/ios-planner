import styled from 'styled-components'

const InputStyle = styled.input`
  padding: 0px;
  border: none;
  color: var(--white-default);
  width: 100%;
  box-sizing: border-box;
  height: min-content;
  display: block;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : 'var(--fz-body-1)'};
  background: ${(props) => (props.background ? props.background : 'none')};
  &:focus {
    background: ${(props) =>
      props.focusBackground ? props.focusBackground : 'none'};
  }
  &::selection {
    background: var(--blue-lighten-1-transperent);
  }
`
export { InputStyle }
