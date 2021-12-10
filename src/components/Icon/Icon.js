import IconStyle from './Icon.style'

const Icon = (props) => {
  // const itemSizes = {
  //   xl: {
  //     fontSize: 'var(--fz-mega-1)',
  //     padding: '4px'
  //   },
  //   lg: {
  //     fontSize: 'var(--fz-title-2)',
  //     padding: '2px'
  //   },
  //   md: {
  //     fontSize: 'var(--fz-body-1)',
  //     padding: '2px'
  //   }
  // }

  // let propsExtended = { ...props }
  // props.size
  //   ? Object.assign(propsExtended, itemSizes[props.size])
  //   : Object.assign(propsExtended, itemSizes['lg'])
  // propsExtended.color = props.color
  //   ? colorPalette[props.color]
  //   : colorPalette['light']
  return (
    <IconStyle {...props}>
      <props.component />
    </IconStyle>
  )
}
export default Icon
