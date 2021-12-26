import { Row, Col } from '../Grid'
import { SwitcherStyled } from './Switcher.styled'

const Switcher = (props) => {
  const { topLeft, title, topRight, isActive, accentColor, ...rest } = props

  return (
    <SwitcherStyled
      isActive={isActive}
      tabIndex={1}
      accentColor={accentColor}
      {...rest}
    >
      <Row mb={4} justifyContent="space-between">
        {topLeft && <Col cw="auto">{topLeft}</Col>}
        {topRight && <Col cw="auto">{topRight}</Col>}
      </Row>
      {title && (
        <Row>
          <Col overflow="hidden">{title}</Col>
        </Row>
      )}
    </SwitcherStyled>
  )
}
export default Switcher
