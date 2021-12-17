import styled from 'styled-components'

const RowStyled = styled.div`
  margin-bottom: ${(props) => props.mb || null}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent || null};
  & > div {
    margin-bottom: ${(props) => props.gy || null}px;
  }
`

export default RowStyled
