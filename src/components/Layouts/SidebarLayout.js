import {
  Row,
  Col,
  Switcher,
  Title,
  Icon,
  Input,
  Button
} from '../../components'
import { CategoryList } from '../../domains/Category/components'
import {
  MdCalendarToday,
  MdOutlineEventNote,
  MdInbox,
  MdFlag,
  MdSearch,
  MdAddCircleOutline
} from 'react-icons/md'
import { useStore } from '../../contexts/Store'
import { useHistory } from 'react-router-dom'

const SidebarLayout = () => {
  const { addRecord } = useStore()
  const history = useHistory()

  const createCategory = () => {
    addRecord({ collectionPath: 'categories' })
  }
  return (
    <Row negativeMargin flexDirection="column" height="100%">
      <Col cw="auto">
        <Row negativeMargin mb={24} mt={12}>
          <Col>
            <Input type="search" placeholder="Поиск" icon={<MdSearch />} />
          </Col>
        </Row>
        <Row justifyContent="space-between" gy={12} just>
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
              topRight={<Title variant="h3">0</Title>}
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
              topRight={<Title variant="h3">123</Title>}
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
              topRight={<Title variant="h3">0</Title>}
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
              topRight={<Title variant="h3">0</Title>}
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
      </Col>
      <Col overflowY="auto">
        <Row mb={12}>
          <Col>
            <Title variant="h6">My lists</Title>
          </Col>
        </Row>
        <Row negativeMargin>
          <Col>
            <CategoryList />
          </Col>
        </Row>
      </Col>
      <Col cw="auto" pb={12}>
        <Button
          onClick={createCategory}
          isHover
          icon={<MdAddCircleOutline />}
          size="md"
        >
          Новый список
        </Button>
      </Col>
    </Row>
  )
}
export default SidebarLayout
