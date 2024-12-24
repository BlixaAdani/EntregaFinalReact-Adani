import './App.css'
import NavBar from './components/NavBar'
import ItemsListContainer from './components/ItemsListContainer'

function App() {

  return (
    <>
        <NavBar />
        <ItemsListContainer titulo="Listado de productos"></ItemsListContainer>
    </>
  )
}

export default App