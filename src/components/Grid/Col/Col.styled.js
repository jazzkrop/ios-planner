import styled from 'styled-components'

const ColStyled = styled.div`
  padding: 0 ${(props) => props.px || 'var(--col-padding)}'};
  padding-bottom: ${(props) => props.pb || null}px;
  padding-right: ${(props) => props.pr || null}px;
  padding-left: ${(props) => props.pl || null}px;
  padding-top: ${(props) => props.pt || null}px;
  box-sizing: border-box;
  flex: ${(props) => (props.cw ? '0 0 auto' : '1 0 0%')};
  width: ${(props) => (props.cw / 12) * 100}%;
  overflow: ${(props) => props.overflow || null};
  overflow-y: ${(props) => props.overflowY || null};
  flex-grow: ${(props) => props.flexGrow || null};
  flex-basis: ${(props) => props.flexBasis || null};
  border-right: ${(props) => props.borderRight || null};
  align-self: ${(props) => props.alignSelf || null};
  height: ${(props) => {
    return props.height || null
  }};
  background: ${(props) => props.background || null};

  @media (min-width: 576px) {
    width: ${(props) => {
      return props.xs ? `${(props.xs / 12) * 100}%` : null
    }};
  }
  @media (min-width: 768px) {
    width: ${(props) => {
      return props.sm ? `${(props.sm / 12) * 100}%` : null
    }};
  }
  @media (min-width: 992px) {
    width: ${(props) => {
      return props.md ? `${(props.md / 12) * 100}%` : null
    }};
  }
  @media (min-width: 1200px) {
    width: ${(props) => {
      return props.lg ? `${(props.lg / 12) * 100}%` : null
    }};
  }
  @media (min-width: 1400px) {
    width: ${(props) => {
      return props.xl ? `${(props.xl / 12) * 100}%` : null
    }};
  }
  @media (max-width: 576px) {
    width: ${(props) => {
      return props.xxl ? `${(props.xxl / 12) * 100}%` : null
    }};
  }
`
export default ColStyled
