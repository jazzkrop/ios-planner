const searchRecords = (state, payload) => {
  const { collectionPath, searchedRecords } = payload

  const stateCopy = JSON.parse(JSON.stringify(state))

  stateCopy.filtered[collectionPath] = searchedRecords

  return { ...stateCopy }
}

export default searchRecords
