import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { StarShipCard } from "../components/StarShipCard"


export const StarShips=()=>{
    
    const {pages} = useParams()
    const navigate= useNavigate()
    const [page,setPage]=useState(parseInt(pages,10))

    const[starships,setStarShip]=useState([])
    const [reload,setReload]=useState([false])

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            setStarShip([])
            const results=await axios(`https://swapi.dev/api/starships/?page=${page}`)
            setStarShip(results.data.results)
        }
        cargarUsuarios()
        setReload(false)
    },[reload])

    const onPrevios=()=>{
        if(page===1)return;

        setPage(page-1)
        setReload(true)
    }

    
    const onNext=()=>{
        if(page===4)return;

        setPage(page+1)
        setReload(true)
    }

    return(
        <div>
            <ul>
                {starships.map((starShip,id) =>(
                    <StarShipCard key={id} starship={starShip} id={id+10*(page-1)} />
                ))}
            </ul>

            <button onClick={onPrevios}>previos</button>
            <button onClick={onNext}>next</button>
        </div>
    )
}