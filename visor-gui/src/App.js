import logo from './logo.svg'
import './App.css'
import HomePage from './pages/home-page'
import store from './store/store'
import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App
