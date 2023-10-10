import { useState, useEffect } from "react"
import { getAllStarships } from "../../../services/sw-api"
// import StarshipCard from './components/StarshipCard' 
import { Link } from 'react-router-dom'


import './StarshipsList.css'

const StarshipList = () => {
  const[starshipList, setStarShipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarShipList(starshipData.results)
      }
    fetchStarshipList()
  }, [])

  
  // if url length === 34 return true
  
  
  if (!starshipList.length) return <h1>Loading Starships...</h1>
  
  return (
    <div className="starship-list">
      {starshipList.map(starship => 
        <div className="starship-card" key={starship.name}>
          { starship.url.length === 34 
            ?  <Link to={`/starships/${starship.url.slice(-2)}`}>{ starship.name }</Link>
            :  <Link to={`/starships/${starship.url.slice(-3)}`}>{ starship.name }</Link>
          }
        </div>
      )}
      {console.log(starshipList[0])}
    </div>
  )
}

export default StarshipList