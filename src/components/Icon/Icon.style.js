import styled from 'styled-components'

const IconStyle = styled.div`
  margin-right: ${(props) => (props.marginRight ? props.marginRight : null)};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : 'var(--fz-title-2)'};
  line-height: ${(props) =>
    props.fontSize ? props.fontSize : null};
  width: auto;
  color: ${(props) => (props.color ? props.color : null)};
`
export default IconStyle
