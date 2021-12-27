import { Row, Col, Title, Button } from '../../components'
import { CategoryList } from '../../domains/Category/components'
import { MdAddCircleOutline } from 'react-icons/md'
import { useStore } from '../../contexts/Store'
import { SwitchersList, TasksSearchInput } from './components'

const SidebarLayout = () => {
  const { addRecord } = useStore()

  const createCategory = () => {
    addRecord({ collectionPath: 'categories' })
  }
  return (
    <Row negativeMargin flexDirection="column" height="100%">
      <Col cw="auto">
        <Row negativeMargin mb={24} mt={12}>
          <Col>
            <TasksSearchInput />
          </Col>
        </Row>
        <Row negativeMargin>
          <Col>
            <SwitchersList />
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
