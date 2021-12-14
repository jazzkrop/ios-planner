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
import { Divider } from '../components/Divider'
import { Title } from '../components/Title'
import { Text } from '../components/Text'

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
          <Divider />
          <Title variant="h1">New title</Title>
          <Text isElipsis variant="active">
            New text, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Iusto fuga nostrum dignissimos voluptas modi ullam ut? Temporibus
            earum accusamus voluptas dicta minus beatae aliquam neque numquam
            laboriosam saepe vero id, nesciunt distinctio deserunt ullam
          </Text>
          <Text variant="disabled">
            New text, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Iusto fuga nostrum dignissimos voluptas modi ullam ut? Temporibus
            earum accusamus voluptas dicta minus beatae aliquam neque numquam
            laboriosam saepe vero id, nesciunt distinctio deserunt ullam
          </Text>
        </Container>
      </AppLayout>
    </>
  )
}

export default Navigator
