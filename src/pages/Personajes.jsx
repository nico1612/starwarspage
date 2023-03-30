import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PersonajeCard } from "../components/PersonajeCard"


export const Personajes=()=>{

    const {pages} = useParams()
    const navigate= useNavigate()
    const [page,setPage]=useState(parseInt(pages,10))
    const[people,setPeople]=useState([])
    const [reload,setReload]=useState([false])

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            setPeople([])
            const results=await axios(`https://swapi.dev/api/people/?page=${page}`)
            setPeople(results.data.results)
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
        if(page===9)return;

        setPage(page+1)
        setReload(true)
        
    }

    return(

        <div>
           <ul>
                {people.map((Personaje,id) =>(
                    <div className="bg-warning">
                        <PersonajeCard key={id} personaje={Personaje} page={page} id={id+10*(page-1)}/>
                    </div>
                ))}

            </ul>

            <button onClick={onPrevios}>previos</button>
            <button onClick={onNext}>next</button>
        </div>
    )
}