import { Input } from '../..'
import { MdSearch } from 'react-icons/md'
import { useStore } from '../../../contexts/Store'
import { useHistory } from 'react-router-dom'

const TasksSearch = () => {
  const { searchRecords } = useStore()
  const history = useHistory()
  let timer = null
  const decideAboutMakingQuery = (event) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      searchRecords({ collectionPath: 'tasks', query: event.target.value })
      history.push('/tasks-all/search')
    }, 500)
  }

  return (
    <Input
      type="search"
      placeholder="Search"
      thin
      icon={<MdSearch />}
      onChange={decideAboutMakingQuery}
      onClick={decideAboutMakingQuery}
    />
  )
}
export default TasksSearch
