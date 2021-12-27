import { Input } from '../../../components'
import { MdSearch } from 'react-icons/md'

const TaskSearch = () => {
  const handleSearchInputChange = () => {}
  return (
    <Input
      type="search"
      placeholder="Поиск"
      icon={<MdSearch />}
      onChange={handleSearchInputChange}
    />
  )
}
export default TaskSearch
