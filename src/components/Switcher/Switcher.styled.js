// make styled components for switching url with react-router-dom
import styled from 'styled-components'

const SwitcherStyled = styled.div`
  background: var(--dark-lighten-6);
  border-radius: ${(props) => props.borderRadius || 'var(--border-radius-6)'};
  padding: var(--offset-4);
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) =>
      props.isActive ? 'var(--white-default)' : 'var(--dark-lighten-8)'};
  }
  &:focus {
    background: ${(props) => props.accentColor || null};
  }
  & * .icon {
    background-color: ${(props) =>
      props.isActive ? 'var(--white-default)' : null};
    color: ${(props) => (props.isActive ? 'var(--dark-lighten-4)' : null)};
  }
`
export { SwitcherStyled }
