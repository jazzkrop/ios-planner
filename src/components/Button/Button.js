import Icon from '../Icon/Icon'
import ButttonStyle from './Button.style'

const Buttton = (props) => {
  // const itemSizes = {
  //   lg: {
  //     fontSize: 'var(--fz-title-1)',
  //     padding: '8px'
  //   },
  //   md: {
  //     fontSize: 'var(--fz-body-1)',
  //     padding: '4px'
  //   },
  //   sm: {
  //     fontSize: 'var(--fz-caption-1)',
  //     padding: '2px'
  //   }
  // }
  // let propsExtended = { ...props }

  // props.size
  //   ? Object.assign(propsExtended, itemSizes[props.size])
  //   : Object.assign(propsExtended, itemSizes['md'])
  // propsExtended.color = props.color
  //   ? colorPalette[props.color]
  //   : colorPalette['light']
  // console.log(propsExtended.color)
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
