import { useReducer } from 'react'
import StoreContext from './StoreContext'
import {reducer} from './reducer'
import {
  useAddRecord,
  useDestroyRecord,
  useUpdateRecord
} from './hooks'

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {lists:{}, currentList:'all'})
  const addRecord = useAddRecord(dispatch)
  const destroyRecord = useDestroyRecord(dispatch)
  const updateRecord = useUpdateRecord(dispatch)

  console.log('store ->', store)

  return (
    <StoreContext.Provider
      value={{
        store,
        addRecord,
        destroyRecord,
        updateRecord
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
