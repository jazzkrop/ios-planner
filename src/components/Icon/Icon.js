import IconStyle from './Icon.style'

const Icon = (props) => {
  return (
    <IconStyle {...props}>
      <props.component />
    </IconStyle>
  )
}
export default Icon
