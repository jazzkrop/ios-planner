import { IconWrapper, InputStyled, InputWrapper } from './Input.style'

const Input = (props) => {
  const { icon, placeholder, type, size } = props

  return (
    <InputWrapper>
      <IconWrapper size={size}>{icon}</IconWrapper>
      <InputStyled placeholder={placeholder} type={type} size={size} />
    </InputWrapper>
  )
}

export default Input
