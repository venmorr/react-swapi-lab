import { Routes, Route } from 'react-router-dom'

// import NavBar from './components/NavBar/NavBar'
import StarshipsList from './pages/StarshipsList/StarshipsList'
import StarshipsDetails from './pages/StarshipDetails/StarshipDetails'

import './App.css'

function App() {
  // const [count, setCount] = useState(0

  return (
    <>
      <Routes>
        <Route path='/starships' element={<StarshipsList />} />
        <Route path='/starships/:starshipId' element={<StarshipsDetails />} />
      </Routes>      
    </>
  )
}

export default App
