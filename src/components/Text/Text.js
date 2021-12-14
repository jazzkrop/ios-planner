import { TextStyled } from './Text.style'

const Text = (props) => {
  const { children, color, isElipsis } = props
  return (
    <TextStyled color={color} isElipsis={isElipsis}>
      {children}
    </TextStyled>
  )
}

export default Text
