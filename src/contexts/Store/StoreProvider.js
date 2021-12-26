import { useReducer } from 'react'
import StoreContext from './StoreContext'
import { reducer } from './reducer'
import {
  useAddRecord,
  useDestroyRecord,
  useUpdateRecord,
  useGetNumberOfDoneTasks,
  useGetNumberOfUndoneTasks
} from './hooks'

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { categories: {}, tasks: {} })
  const addRecord = useAddRecord(store, dispatch)
  const destroyRecord = useDestroyRecord(dispatch)
  const updateRecord = useUpdateRecord(dispatch)
  const getNumberOfDoneTasks = useGetNumberOfDoneTasks(store)
  const getNumberOfUndoneTasks = useGetNumberOfUndoneTasks(store)
  console.log('store ->', store)

  return (
    <StoreContext.Provider
      value={{
        store,
        addRecord,
        destroyRecord,
        updateRecord,
        getNumberOfDoneTasks,
        getNumberOfUndoneTasks
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
