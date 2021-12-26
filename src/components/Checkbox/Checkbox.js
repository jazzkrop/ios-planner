import { CheckboxStyled } from './Checkbox.styled'

const Checkbox = (props) => {
  const { color, ...rest } = props

  return <CheckboxStyled color={color} {...rest} />
}
export default Checkbox
