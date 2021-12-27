import { useHistory } from 'react-router-dom'
import { useStore } from '../../../contexts/Store'
import { Row, Col, Switcher, Title, Icon } from '../../../components'
import {
  MdCalendarToday,
  MdOutlineEventNote,
  MdInbox,
  MdFlag
} from 'react-icons/md'

const SwitcherList = () => {
  const { getNumberOfUndoneTasks } = useStore()
  const history = useHistory()

  return (
    <Row justifyContent="space-between" gy={12}>
      <Col cw={6} px="0" pr={6}>
        <Switcher
          accentColor="var(--blue)"
          topLeft={
            <Icon
              rounded
              size="lg"
              background="var(--blue)"
              icon={<MdCalendarToday />}
            />
          }
          topRight={
            <Title variant="h3">{getNumberOfUndoneTasks('today')}</Title>
          }
          title={
            <Title isElipsis variant="h6">
              Сегодня
            </Title>
          }
          onClick={() => {
            history.push('/tasks-all/today')
          }}
        />
      </Col>
      <Col cw={6} px="0" pl={6}>
        <Switcher
          accentColor="var(--red)"
          topLeft={
            <Icon
              rounded
              size="lg"
              background="var(--red)"
              icon={<MdOutlineEventNote />}
            />
          }
          topRight={
            <Title variant="h3">{getNumberOfUndoneTasks('scheduled')}</Title>
          }
          title={
            <Title isElipsis variant="h6">
              Запланировано
            </Title>
          }
          onClick={() => {
            history.push('/tasks-all/scheduled')
          }}
        />
      </Col>
      <Col cw={6} px="0" pr={6}>
        <Switcher
          accentColor="var(--dark-lighten-5)"
          topLeft={
            <Icon
              rounded
              size="lg"
              background="var(--dark-lighten-5)"
              icon={<MdInbox />}
            />
          }
          topRight={<Title variant="h3">{getNumberOfUndoneTasks('all')}</Title>}
          title={
            <Title isElipsis variant="h6">
              Все
            </Title>
          }
          onClick={() => {
            history.push('/categories-all/')
          }}
        />
      </Col>
      <Col cw={6} px="0" pl={6}>
        <Switcher
          accentColor="var(--orange)"
          topLeft={
            <Icon
              rounded
              size="lg"
              background="var(--orange)"
              icon={<MdFlag />}
            />
          }
          topRight={
            <Title variant="h3">{getNumberOfUndoneTasks('flagged')}</Title>
          }
          title={
            <Title isElipsis variant="h6">
              С флажком
            </Title>
          }
          onClick={() => {
            history.push('/tasks-all/flagged')
          }}
        />
      </Col>
    </Row>
  )
}
export default SwitcherList
