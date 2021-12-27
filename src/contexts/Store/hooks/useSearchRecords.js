const useSearchRecords = (store, dispatch) => {
  // TODO: rename this function
  const searchRecords = ({ collectionPath, query }) => {
    // make array from quary
    const queryExtended = query?.split(' ')
    const arrayValues = Object.values(store[collectionPath])

    const isLookingFor = (item) => {
      for (let i = 0; i < queryExtended.length; i++) {
        const queryWord = queryExtended[i]
        if (!item.name.toLowerCase().includes(queryWord.toLowerCase())) {
          return false
        }
      }
      return true
    }

    const result = arrayValues.filter(isLookingFor)
    console.log(result)
    const payload = { collectionPath, searchedRecords: result }
    dispatch({ type: 'searchRecords', payload })
  }
  return searchRecords
}
export default useSearchRecords
