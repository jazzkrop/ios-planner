import CategoryCombinedView from './CategoryCombinedView'
import { useStore } from '../../../contexts/Store'

const CategoryList = () => {
  const { store } = useStore()
  const categories = Object.values(store.categories)
  return (
    <>
      {categories &&
        categories.map((item) => {
          return <CategoryCombinedView key={item?.id} category={item} />
        })}
    </>
  )
}
export default CategoryList
