import { Input } from '../..'
import { MdSearch } from 'react-icons/md'
import { useStore } from '../../../contexts/Store'
import { useHistory } from 'react-router-dom'

const TasksSearch = () => {
  const { searchRecords } = useStore()
  const history = useHistory()
  let timer = null
  const handleSearchInputChange = (event) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      searchRecords({ collectionPath: 'tasks', query: event.target.value })
      history.push('/tasks-all/search')
    }, 500)
  }

  return (
    <Input
      type="search"
      placeholder="Поиск"
      icon={<MdSearch />}
      onChange={handleSearchInputChange}
    />
  )
}
export default TasksSearch
