import { useStore } from '../../contexts/Store'
import { PageWrapper, Title, Row, Col } from '../../components'
import { TaskList } from '../../domains/Task/components'

const CategoriesAll = () => {
  const { store } = useStore()
  const categoriesId = Object.keys(store.categories)
  return (
    <PageWrapper title="All">
      {categoriesId.map((categoryId) => {
        return (
          <>
            <Row mt={12}>
              <Col>
                <Title variant="h4" color={store.categories[categoryId].color}>
                  {store.categories[categoryId].name}
                </Title>
              </Col>
            </Row>
            <TaskList categoryId={categoryId} />
          </>
        )
      })}
    </PageWrapper>
  )
}

export default CategoriesAll
