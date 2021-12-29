import { useState } from 'react'
import { MdCalendarToday, MdClose } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { Card, Row, Col, Icon, Input, Title, Button } from '../../../components'
import { useStore } from '../../../contexts/Store'

const CategoryCombinedView = ({ category }) => {
  const { destroyRecord, updateRecord, getNumberOfUndoneTasks } = useStore()
  const history = useHistory()
  const [categoryName, setCategoryName] = useState(category?.name)
  const [onEdit, setOnEdit] = useState(true)

  const numberOfUndoneTasks = getNumberOfUndoneTasks(category.id)

  const deleteCategory = (e) => {
    e.stopPropagation()
    destroyRecord({ collectionPath: 'categories', id: category.id })
    history.push('/tasks-all/')
  }
  const changeEditMode = () => {
    setCategoryName(category.name)
    setOnEdit(!onEdit)
  }
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const values = {}
      if (categoryName !== category.name) {
        values.name = categoryName
      }
      updateRecord({ collectionPath: 'categories', id: category.id, values })
      event.target.blur()
    }
  }
  const navigateToThisCategory = () => {
    history.push(`/tasks-all/${category.id}`)
  }

  return (
    <Card tabIndex={4} onClick={navigateToThisCategory}>
      <Row negativeMargin alignItems="center">
        <Col cw="auto">
          <Icon
            rounded
            size="lg"
            background="var(--blue)"
            icon={<MdCalendarToday />}
          />
        </Col>
        <Col>
          {onEdit && (
            <Input
              size="md"
              bold
              autoFocus
              onClick={(event) => {
                event.target.select()
              }}
              onBlur={changeEditMode}
              value={categoryName}
              onFocus={(e) => e.currentTarget.select()}
              onKeyDown={handleEnter}
              onChange={(event) => setCategoryName(event.target.value)}
            />
          )}
          {!onEdit && (
            <Title
              variant="h6"
              color="var(--white-default)"
              onClick={changeEditMode}
              align="middle"
            >
              {category?.name}
            </Title>
          )}
        </Col>
        <Col cw="auto">
          <Title
            isElipsis
            variant="h6"
            thin
            color="var(--dark-lighten-7)"
            align="middle"
          >
            {numberOfUndoneTasks}
          </Title>
        </Col>
        <Col cw="auto" pl="0">
          <Button
            isHover
            size="sm"
            icon={<MdClose />}
            color="var(--dark-lighten-3)"
            hoverColor="var(--dark-lighten-8)"
            onClick={deleteCategory}
          />
        </Col>
      </Row>
    </Card>
  )
}
export default CategoryCombinedView
