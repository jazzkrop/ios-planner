import RowStyled from './Row.styled'

const Row = (props) => {
  const { children, justifyContent, mb, gy } = props
  return (
    <RowStyled gy={gy} mb={mb} justifyContent={justifyContent}>
      {children}
    </RowStyled>
  )
}

export default Row
