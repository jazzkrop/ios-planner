// make styled components for switching url with react-router-dom
import styled from 'styled-components'

const SwitcherStyled = styled.div`
  background: var(--dark-lighten-6);
  border-radius: ${(props) => props.borderRadius || 'var(--border-radius-6)'};
  padding: var(--offset-4);
  &:focus h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--white-default);
  }
  &:focus {
    background: ${(props) => props.accentColor || null};
    color: var(--white-default);
  }
  &:focus * .icon {
    background-color: var(--white-default);
    color: ${(props) => props.accentColor || null};
  }
`
export { SwitcherStyled }
