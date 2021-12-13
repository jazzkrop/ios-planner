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
          <Input />
          <Buttton icon={<MdAddCircleOutline />} size="md">
            Новый список
          </Buttton>

          <Buttton icon={<MdAdd />} color="--dark-lighten-7" size="lg" />
          <Buttton icon={<MdFlag />} color="--orange" size="md" />
          <Buttton icon={<MdClose />} color="--dark-lighten-6" />
          <Buttton size="lg" color="--dark-lighten-5">
            Показать
          </Buttton>
        </Container>
      </AppLayout>
    </>
  )
}

export default Navigator
