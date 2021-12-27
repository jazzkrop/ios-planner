import { Row, Col, Title } from '../../components'

const PageWrapper = (props) => {
  const { title, subtitle, topRight, children, accentColor } = props

  return (
    <Row negativeMargin flexDirection="column" height="100%">
      <Col cw="auto" overflow="hidden">
        {topRight && (
          <Row mb={16} flexDirection="row-reverse">
            <Col cw="auto">{topRight}</Col>
          </Row>
        )}
        {(title || subtitle) && (
          <Row mb={24} mt={64} justifyContent="space-between">
            <Col cw="auto">
              <Title variant="h1" color={accentColor}>
                {title}
              </Title>
            </Col>
            <Col cw="auto">
              <Title variant="h1" color={accentColor}>
                {subtitle}
              </Title>
            </Col>
          </Row>
        )}
      </Col>
      <Col cw={12} flexBasis="80%" overflow="hidden">
        {children}
      </Col>
    </Row>
  )
}
// rewrite logick
export default PageWrapper
