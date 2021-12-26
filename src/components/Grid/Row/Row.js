import RowStyled from './Row.styled'

const Row = (props) => {
  const {
    children,
    justifyContent,
    mb,
    my,
    gy,
    height,
    flexDirection,
    alignItems,
    negativeMargin,
    ...rest
  } = props
  return (
    <RowStyled
      gy={gy}
      mb={mb}
      my={my}
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      negativeMargin={negativeMargin}
      {...rest}
    >
      {children}
    </RowStyled>
  )
}

export default Row
