import IconStyle from './Icon.style'

const Icon = (props) => {
  const { icon, background, size, color, rounded } = props
  return (
    <IconStyle
      className="icon"
      background={background}
      size={size}
      color={color}
      rounded={rounded}
    >
      {icon}
    </IconStyle>
  )
}
export default Icon
