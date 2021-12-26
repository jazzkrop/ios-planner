import { IconWrapper, InputStyled, InputWrapper } from './Input.style'

const Input = (props) => {
  const { icon, placeholder, type, size, bold, display, align, ...rest } = props

  return (
    <InputWrapper display={display} align={align}>
      {icon && <IconWrapper size={size}>{icon}</IconWrapper>}
      <InputStyled
        icon={icon}
        placeholder={placeholder}
        type={type}
        size={size}
        bold={bold}
        {...rest}
      />
    </InputWrapper>
  )
}

export default Input
