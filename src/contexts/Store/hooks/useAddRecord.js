import { firestoreService } from '../../../services/firebase'

const { getId, createDocument } = firestoreService

const useAddRecord = (dispatch) => {
  const addRecord = ({ collectionPath, id, values }) => {
    values = values || {}
    const recordId = id || getId(collectionPath)
    values.id = recordId

    if (collectionPath === 'tasks') {
      values.createdAt = Date.now()
      values.updatedAt = Date.now()
      values.done = values.done || false
      values.flagged = values.flagged || false
    }
    if (collectionPath === 'categories') {
      values.name = values.name || 'New title'
      values.color = values.color || 'var(--blue)'
      values.children = []
    }
    const payload = {
      collectionPath,
      id: recordId,
      values
    }

    dispatch({ type: 'createRecord', payload })
  }

  return addRecord
}

export default useAddRecord
