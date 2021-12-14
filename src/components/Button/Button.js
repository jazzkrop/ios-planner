import { ButtonStyled, IconWrapper } from './Button.style'

const Button = (props) => {
  const { isHover, isActive, children, shape, icon, size, color } = props

  return (
    <ButtonStyled
      size={size}
      isHover={isHover}
      isActive={isActive}
      shape={shape}
      color={color}
    >
      {icon && (
        <IconWrapper mr={icon && children && 6} size={size}>
          {icon}
        </IconWrapper>
      )}
      {children}
    </ButtonStyled>
  )
}
// rewrite logick
export default Button
