import { ButtonStyled, TextWrapper, IconWrapper } from './Button.style'

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
      {icon && children ? (
        <>
          <IconWrapper size={size}>{icon}</IconWrapper>
          <TextWrapper>{children}</TextWrapper>
        </>
      ) : icon ? (
        <IconWrapper size={size}>{icon}</IconWrapper>
      ) : children ? (
        children
      ) : null}
    </ButtonStyled>
  )
}
// rewrite logick
export default Button
