import axios from "axios"
import { useEffect, useState } from "react"
import { Item } from "../components/Item"


export const Personajes=()=>{

    const [page,setPage]=useState(1)
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

    const obtenerId=({id})=>{
        if(id<17){
            return 
        }
        else{
            return 
        }
    }
    return(
        <div>
            <ul>
                {people.map((Personaje,id) =>(
                    <Item key={id} name={Personaje.name} path={"people"} id={id+10*(page-1)} />
                ))}

            </ul>
            <button onClick={onPrevios}>previos</button>
            <button onClick={onNext}>next</button>
        </div>
    )
}