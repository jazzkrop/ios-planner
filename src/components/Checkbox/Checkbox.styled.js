// make styled components for switching url with react-router-dom
import styled from 'styled-components'

const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  & {
    appearance: none;
    display: flex;
    border: 2px solid var(--dark-lighten-4);
    border-radius: var(--border-radius-rounded);
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding: var(--offset-2);
  }
  &:checked {
    background-color: var(--blue);
    border-color: var(--blue);
    background-clip: content-box;
  }
`
export { CheckboxStyled }
