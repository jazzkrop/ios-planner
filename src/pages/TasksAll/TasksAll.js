import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageWrapper, Button, Text, Row, Col, Divider } from '../../components'
import { TaskList } from '../../domains/Task/components'
import { useStore } from '../../contexts/Store'
import { MdAdd } from 'react-icons/md'
import { useShowTaskForm } from '../../domains/Task/hooks'

const TasksAll = () => {
  const { store, getNumberOfDoneTasks, getNumberOfUndoneTasks } =
    useStore()
  const { id } = useParams()
  const [showDoneTasks, setShowDoneTasks] = useState(false)
  const [showTaskForm, setShowTaskForm] = useState(false)

  const category = id !== 'today' && id !== 'flagged' && store['categories'][id]
  const title =
    id === 'flagged' ? 'Flagged' : id === 'today' ? 'Today' : category.name
  const accentColor =
    id === 'flagged'
      ? 'var(--orange)'
      : id === 'today'
      ? 'var(--blue)'
      : category.color || 'var(--blue)'

  const numberOfUndoneTasks = getNumberOfUndoneTasks(id)
  const numberOfDoneTasks = getNumberOfDoneTasks(id)

  const addTask = () => {
    setShowTaskForm(true)
  }
  return (
    <PageWrapper
      title={title}
      subtitle={numberOfUndoneTasks}
      accentColor={accentColor}
      topRight={
        <Button
          isHover
          icon={<MdAdd />}
          color="var(--dark-lighten-7)"
          size="lg"
          onClick={addTask}
        />
      }
    >
      {numberOfDoneTasks > 0 && (
        <>
          <Row mb={6} justifyContent="space-between">
            <Col cw="auto">
              <Text>{numberOfDoneTasks} Completed</Text>
            </Col>
            <Col cw="auto">
              <Button
                color={accentColor}
                onClick={() => setShowDoneTasks(!showDoneTasks)}
              >
                {showDoneTasks && 'Hide'}
                {!showDoneTasks && 'Show'}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Divider negativeRight />
            </Col>
          </Row>
        </>
      )}
      <TaskList
        categoryId={id}
        showDoneTasks={showDoneTasks}
        showTaskForm={showTaskForm}
        setShowTaskForm={setShowTaskForm}
      />
    </PageWrapper>
  )
}

export default TasksAll
