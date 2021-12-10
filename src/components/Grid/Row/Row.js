import RowStyled from './Row.styled'

const Row = (props) => {
  const { children, ...rest } = props
  return <RowStyled {...rest}>{children}</RowStyled>
}

export default Row
