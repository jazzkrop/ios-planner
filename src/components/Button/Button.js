import Icon from '../Icon/Icon'
import ButttonStyle from './Button.style'

const Buttton = (props) => {
  return (
    <ButttonStyle {...props}>
      {props.iconLeft ? (
        <Icon
          component={props.iconLeft}
          marginRight="8px"
          size={props.iconSize}
          color={props.color}
        />
      ) : null}
      {props.children}
    </ButttonStyle>
  )
}
export default Buttton
