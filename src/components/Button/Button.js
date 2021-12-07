import ButttonStyle from './Button.style'

const Buttton = (props) => {
  return (
    <ButttonStyle {...props}>
      {props.iconLeft ? props.iconLeft : null}
      {props.children}
    </ButttonStyle>
  )
}
export default Buttton
