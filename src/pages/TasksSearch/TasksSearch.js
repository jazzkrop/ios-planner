import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageWrapper, Title, Text, Row, Col, Divider } from '../../components'
import { TaskList } from '../../domains/Task/components'
import { useStore } from '../../contexts/Store'

const TasksSearch = () => {
  const { store, getNumberOfDoneTasks, getNumberOfUndoneTasks } = useStore()
  const { id } = useParams()
  const title = `Results for "${store.filtered?.tasks?.query || ''}"`
  const searchResult = store.filtered?.tasks?.result || []
  const getCategoriesId = () => {
    let categoriesId = []
    searchResult.forEach((task) => {
      if (!categoriesId.includes(task.parentId)) {
        categoriesId.push(task.parentId)
      }
    })
    return categoriesId
  }
  const categoriesId = getCategoriesId()
  return (
    <PageWrapper title={title}>
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
            <TaskList categoryId={categoryId} showFiltered={true} />
          </>
        )
      })}
    </PageWrapper>
  )
}
export default TasksSearch
