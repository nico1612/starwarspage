import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";


export const StarShip=()=>{
    const {id}= useParams();
    const ids=[2,3,5,9];
    const[starship,setStarship]=useState([])
    useEffect(()=>{
        const cargarUsuarios=async()=>{
            const results=await axios(`https://swapi.dev/api/starships/${ids}`)
            setStarship(results.data)
        }
        cargarUsuarios()
    },[])

    const onReturn=()=>{
        Navigate(-1)
    }

    if(!starship){
        return <Navigate to="/personajes" />
    }
    return(
        <div className="row mt-5">
                
                <div className="col-8">
                    <h3>{starship.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>modelo:</b> {starship.model}</li>
                        <li className="list-group-item"><b>fabricante:</b> {starship.manufacturer}</li>
                        <li className="list-group-item"><b>costo en creditos:</b> {starship.cost_in_credits}</li>
                    </ul>
                    

                    <button 
                        className="btn btn-outline-primary"
                        onClick={onReturn}
                    >
                        back
                    </button>
                </div>
            </div>
    )
}