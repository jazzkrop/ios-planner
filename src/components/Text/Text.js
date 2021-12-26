import { TextStyled } from './Text.style'

const Text = (props) => {
  const { children, color, lineHeight, isElipsis,disabled, ...rest } = props
  return (
    <TextStyled
      color={color}
      lineHeight={lineHeight}
      isElipsis={isElipsis}
      disabled={disabled}
      {...rest}
    >
      {children}
    </TextStyled>
  )
}

export default Text
