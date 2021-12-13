import RowStyled from './Row.styled'

const Row = (props) => {
  const { children } = props
  return <RowStyled>{children}</RowStyled>
}

export default Row
