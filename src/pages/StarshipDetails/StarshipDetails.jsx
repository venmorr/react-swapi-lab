import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStarshipDetails } from "../../../services/sw-api"
import { Link } from 'react-router-dom'


const StarshipDetails = () => {
  const[starshipDetails, setStarShipDetails] = useState({})
  const { starshipId } = useParams()


  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(starshipId)
      setStarShipDetails(starshipData)
      }
    fetchStarshipDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading Starship...</h1>

  return (  
    <>
      <div className="details">
        <h1 className="name">Name: {starshipDetails.name}</h1>
        <h2 className="name">Model: {starshipDetails.model}</h2>
        <Link to={`/starships/`}>RETURN</Link>
      </div>
    </>
  )
}

export default StarshipDetails;