import { Row, Col } from '../Grid'
import { CheckboxStyled } from './Checkbox.styled'

const Checkbox = (props) => {
  const { ...rest } = props

  return <CheckboxStyled {...rest} />
}
export default Checkbox
