import styled from 'styled-components'

const InputStyle = styled.input`
  padding: ${(props) => props.padding || null};
  border: none;
  color: var(--white-default);
  width: 100%;

  box-sizing: border-box;
  height: min-content;
  display: block;
  font-size: ${(props) => props.fontSize || null};
  background: ${(props) => props.background || 'none'};

  &:focus {
    background: ${(props) => props.focusBackground || 'none'};
  }
  &::selection {
    background: var(--blue-lighten-1-transperent);
  }
`
const Wrapper = styled.div``
export { InputStyle, Wrapper }
