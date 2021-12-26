import ColStyled from './Col.styled'

const Col = (props) => {
  const {
    children,
    overflow,
    px,
    pb,
    pr,
    pl,
    flexGrow,
    flexBasis,
    flexShrink,
    height,
    ...rest
  } = props
  return (
    <ColStyled
      flexShrink={flexShrink}
      height={height}
      flexGrow={flexGrow}
      flexBasis={flexBasis}
      overflow={overflow}
      px={px}
      pl={pl}
      pr={pr}
      pb={pb}
      {...rest}
    >
      {children}
    </ColStyled>
  )
}
export default Col
