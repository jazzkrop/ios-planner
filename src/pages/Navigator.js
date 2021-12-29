import { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStore } from '../contexts/Store'
import PATHS from '../pages/paths'
import AppLayout from '../components/Layouts/AppLayout'
import { TasksAll } from './TasksAll'
import { TasksSearch } from './TasksSearch'
import LoadingPage from './LoadingPage'
import CategoriesAll from './CategoriesAll/CategoriesAll'
import { TasksScheduled } from './TasksScheduled'

const Navigator = () => {
  const { fetchRecords } = useStore()
  const [loading, setLoading] = useState(true)
  
  const fetchData = useCallback(async () => {
    await fetchRecords()
    setLoading(false)
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <>
      <Router>
        <AppLayout>
          {loading && <LoadingPage />}
          {!loading && (
            <Switch>
              <Route path={PATHS.TASKS_SCHEDULED}>
                <TasksScheduled />
              </Route>
              <Route path={PATHS.TASKS_SEARCH}>
                <TasksSearch />
              </Route>
              <Route path={PATHS.TASKS_ALL}>
                <TasksAll />
              </Route>
              <Route path={PATHS.CATEGORIES_ALL}>
                <CategoriesAll />
              </Route>
            </Switch>
          )}
        </AppLayout>
      </Router>
    </>
  )
}

export default Navigator
