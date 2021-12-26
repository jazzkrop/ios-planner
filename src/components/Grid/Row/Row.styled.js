import styled from 'styled-components'

const RowStyled = styled.div`
  margin: ${(props) =>
    props.negativeMargin
      ? '0 var(--row-negative-margin) 0 var(--row-negative-margin)'
      : null};
  margin-bottom: ${(props) => props.mb || props.my || null}px;
  margin-top: ${(props) => props.mt || props.my || null}px;
  height: ${(props) => props.height || null};
  overflow: ${(props) => props.overflow || null};
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems || null};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || null};
  & > div {
    margin-bottom: ${(props) => props.gy || null}px;
  }
`

export default RowStyled
