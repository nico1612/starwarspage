import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Item } from "../components/Item"
import { obtenerListaDePersonajes } from "../hooks/obtenerListaDePersonajes"


export const StarShips=()=>{
    const path= "starships"
    const {resultados}=obtenerListaDePersonajes(path)
    const starships=resultados
    console.log(starships)
    return(
        <div>
            <ul>
                {starships.map((starShip,id) =>(
                    <Item key={id} name={starShip.name} path={"starship"} id={id} />
                ))}
            </ul>
        </div>
    )
}