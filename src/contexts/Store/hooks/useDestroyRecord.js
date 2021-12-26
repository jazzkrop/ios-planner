const useDestroyRecord = (dispatch) => {
  const destroyRecord = async ({ collectionPath, id }) => {
    const payload = { collectionPath, id }
    dispatch({ type: 'deleteRecord', payload })
  }
  return destroyRecord
}

export default useDestroyRecord
