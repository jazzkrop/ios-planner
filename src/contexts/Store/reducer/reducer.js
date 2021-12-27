import createRecord from './createRecord'
import deleteRecord from './deleteRecord'
import updateRecord from './updateRecord'
import searchRecords from './searchRecords'

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    deleteRecord,
    createRecord,
    updateRecord,
    searchRecords
  }
  return actionsMap[type](state, payload)
}

export default reducer
