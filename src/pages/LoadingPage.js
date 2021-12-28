import { Row, Col, Title } from '../components'

const LoadingPage = () => {
  return (
    <Row height="100%" alignItems="center" justifyContent="center">
      <Col cw={2}>
        <Title variant="h2">Loading...</Title>
      </Col>
    </Row>
  )
}
export default LoadingPage
