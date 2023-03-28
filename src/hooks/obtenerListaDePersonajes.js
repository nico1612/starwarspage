import axios from "axios"
import { useEffect, useState } from "react"

export const obtenerListaDePersonajes=({path="starships"})=>{
    const[resultados,setResultados]=useState([])
    useEffect(()=>{
        const cargarUsuarios=async()=>{
            console.log(path)
            const result = await axios(`https://swapi.dev/api/${path}`)
            setResultados(result.data.results)
        }
        cargarUsuarios()
    },[])

    return{
        resultados
    }
}
