import { Buttton } from '../components'
import {
  MdAddCircleOutline,
  MdAdd,
  MdFlag,
  MdClose,
  MdSearch
} from 'react-icons/md'
import AppLayout from '../components/Layouts/AppLayout'
import TasksAll from './TaskAll/TaskAll'
import { Input } from '../components/Input'
import { Container } from '../components/Grid/Container'
import Row from '../components/Grid/Row/Row'
import Col from '../components/Grid/Col/Col'

const Navigator = () => {
  return (
    <>
      <AppLayout>
        <Container size="xs">
          <Row>
            <Col cw={4}>
              <Input
                type="search"
                placeholder="Поиск"
                icon={<MdSearch />}
                size="sm"
              />
            </Col>
            <Col cw={4}>
              <Input type="transperent" size="lg" />
            </Col>
            <Col cw={4}>
              <Input type="transperent" size="sm" />
            </Col>
            <Col cw={4}>
              <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
            </Col>
            <Col cw={4}>
              <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
            </Col>
            <Col cw={4}>
              <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
            </Col>
          </Row>
          <Row> sdihvbijvhb</Row>

          <Input color="dark" />
          <Buttton
            iconLeft={MdAddCircleOutline}
            iconSize="lg"
            color="darkLighten9"
          >
            Новый список
          </Buttton>

          <Buttton iconLeft={MdAdd} iconSize="xl" color="darkLighten7" />
          <Buttton iconLeft={MdFlag} color="orange" />
          <Buttton iconLeft={MdClose} color="darkLighten6" />
          <Buttton size="lg" color="darkLighten5">
            Показать
          </Buttton>
        </Container>
      </AppLayout>
    </>
  )
}

export default Navigator
