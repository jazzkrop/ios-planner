import { Row, Col } from '../Grid'
import { SwitcherStyled } from './Switcher.styled'
// import { useNavigate } from 'react-router-dom'

const Switcher = (props) => {
  const { topLeft, title, topRight, isActive, url, onCLick } = props
  // const { navigate } = useNavigate()
  const changeUrl = (url) => {
    if (url) {
      // navigate.push(url)
    }
  }
  return (
    <SwitcherStyled isActive={isActive} onClick={changeUrl}>
      <Row mb={4} justifyContent="space-between">
        <Col cw="auto">{topLeft}</Col>
        <Col cw="auto">{topRight}</Col>
      </Row>
      <Row>
        <Col>{title}</Col>
      </Row>
    </SwitcherStyled>
  )
}
export default Switcher
