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
        <Container>
          <Row>
            <Col cw={6}>col 1</Col>
            <Col cw={6}>col 2</Col>
            <Col cw={6}>col 2</Col>
            <Col cw={6}>col 2</Col>
            <Col cw={6}>col 2</Col>
          </Row>
          <Row> sdihvbijvhb</Row>
          <Input placeholder="Поиск" iconLeft={MdSearch} size="lg" />
          <Input color="dark" />
          <Buttton
            iconLeft={MdAddCircleOutline}
            iconSize="lg"
            color="darkLighten9"
          >
            Новый список
          </Buttton>
        </Container>
        <Buttton iconLeft={MdAdd} iconSize="xl" color="darkLighten7" />
        <Buttton iconLeft={MdFlag} color="orange" />
        <Buttton iconLeft={MdClose} color="darkLighten6" />
        <Buttton size="lg" color="darkLighten5">
          Показать
        </Buttton>
      </AppLayout>
    </>
  )
}

export default Navigator
