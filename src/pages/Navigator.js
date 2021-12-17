import { Buttton } from '../components'
import {
  MdAddCircleOutline,
  MdAdd,
  MdFlag,
  MdClose,
  MdSearch,
  MdCalendarToday,
  MdOutlineEventNote,
  MdInbox
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
import Switcher from '../components/Switcher/Switcher'
import Icon from '../components/Icon/Icon'
import { Checkbox } from '../components/Checkbox'

const Navigator = () => {
  return (
    <>
      <AppLayout>
        <Container size="fluid">
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
          <Buttton isHover icon={<MdAddCircleOutline />} size="md">
            Новый список
          </Buttton>

          <Buttton
            isHover
            icon={<MdAdd />}
            color="var(--dark-lighten-7)"
            size="lg"
          />
          <Buttton icon={<MdFlag />} color="var(--orange)" size="md" />
          <Buttton isHover icon={<MdClose />} color="var(--dark-lighten-6)" />
          <Buttton size="lg" color="var(--dark-lighten-5)">
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
          <Row mb={24}>
            <Col cw={3}>
              <Row gy={12}>
                <Col cw={6}>
                  <Switcher
                    topLeft={
                      <Icon
                        rounded
                        size="lg"
                        background="var(--blue)"
                        icon={<MdCalendarToday />}
                      />
                    }
                    topRight={<Title variant="h3">0</Title>}
                    title={
                      <Title isElipsis variant="h6">
                        Сегодня
                      </Title>
                    }
                    url="/tasks-all/today"
                  />
                </Col>
                <Col cw={6}>
                  <Switcher
                    topLeft={
                      <Icon
                        rounded
                        size="lg"
                        background="var(--red)"
                        icon={<MdOutlineEventNote />}
                      />
                    }
                    topRight={<Title variant="h3">0</Title>}
                    title={
                      <Title isElipsis variant="h6">
                        Запланировано
                      </Title>
                    }
                    url="/tasks-all/today"
                  />
                </Col>
                <Col cw={6}>
                  <Switcher
                    topLeft={
                      <Icon
                        rounded
                        size="lg"
                        background="var(--dark-lighten-4)"
                        icon={<MdInbox />}
                      />
                    }
                    topRight={<Title variant="h3">0</Title>}
                    title={
                      <Title isElipsis variant="h6">
                        Все
                      </Title>
                    }
                    url="/tasks-all/today"
                  />
                </Col>
                <Col cw={6}>
                  <Switcher
                    topLeft={
                      <Icon
                        rounded
                        size="lg"
                        background="var(--orange)"
                        icon={<MdFlag />}
                      />
                    }
                    topRight={<Title variant="h3">0</Title>}
                    title={
                      <Title isElipsis variant="h6">
                        С флажком
                      </Title>
                    }
                    url="/tasks-all/today"
                  />
                </Col>
              </Row>
              <Checkbox />
            </Col>
          </Row>
        </Container>
      </AppLayout>
    </>
  )
}

export default Navigator
