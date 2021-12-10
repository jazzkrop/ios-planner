import { InputStyle, Wrapper } from './Input.style'
import Icon from '../Icon/Icon';

const Input = (props) => {
  const itemSizes = {
    lg: {
      fontSize: 'var(--fz-subtitle-1)',
      padding: '2px'
    },
    md: {
      fontSize: 'var(--fz-body-1)'
    },
    sm: {
      fontSize: 'var(--fz-body-2)'
    }
  }
  let propsExtended = { ...props }
  props.size
    ? Object.assign(propsExtended, itemSizes[props.size])
    : Object.assign(propsExtended, itemSizes['md'])

  propsExtended.focusBackground = props.color ? 'var(--dark-default)' : null
  return (
    <Wrapper>
      {props.iconLeft ? (
        <Icon
          component={props.iconLeft}
          marginRight="8px"
          size={props.iconSize}
        />
      ) : null}
      <InputStyle {...propsExtended}></InputStyle>
    </Wrapper>
  )
}
export default Input
