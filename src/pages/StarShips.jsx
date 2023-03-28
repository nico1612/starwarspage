import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Item } from "../components/Item"
import { obtenerListaDePersonajes } from "../hooks/obtenerListaDePersonajes"


export const StarShips=()=>{
    
    const [page,setPage]=useState(1)
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
                    <Item key={id} name={starShip.name} path={"starship"} id={id} />
                ))}
            </ul>

            <button onClick={onPrevios}>previos</button>
            <button onClick={onNext}>next</button>
        </div>
    )
}