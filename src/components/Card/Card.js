import { CardStyled } from './Card.style'

const Card = (props) => {
  const { isHover, isActive, children, shape, icon, size, color, ...rest } =
    props

  return (
    <CardStyled
      tabindex="1"
      size={size}
      isHover={isHover}
      isActive={isActive}
      shape={shape}
      color={color}
      {...rest}
    >
      {children}
    </CardStyled>
  )
}
// rewrite logick
export default Card
