import { DividerStyled } from './Divider.style'

const Divider = (props) => {
  const { negativeRight, ...rest } = props
  return <DividerStyled negativeRight={negativeRight} {...rest} />
}

export default Divider
