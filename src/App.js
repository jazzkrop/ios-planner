import { StoreProvider } from './contexts/Store'
import Navigator from './pages/Navigator'
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Navigator />
      </StoreProvider>
    </div>
  )
}

export default App
