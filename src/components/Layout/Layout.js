import { Row, Container, Col } from '../../components'
import LayoutStyle from './Layout.style'

const Layout = (props) => {
  const { leftAside, children, background } = props

  return (
    <LayoutStyle>
      <Container size="fluid">
        <Row height="100%">
          {leftAside && (
            <Col
              xl={2}
              lg={3}
              sm={4}
              xs={5}
              height="100%"
              borderRight="1px solid var(--black-default)"
            >
              {leftAside}
            </Col>
          )}
          <Col
            background={background}
            pt={16}
            cw={(leftAside && 9) || 12}
            height="100vh"
            overflowY="auto"
          >
            {children}
          </Col>
        </Row>
      </Container>
    </LayoutStyle>
  )
}
export default Layout
