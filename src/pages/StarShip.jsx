import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";


export const StarShip=()=>{
    const {id}= useParams();
    const ids=[2,3,5,9,10,11,12,13,15,17,21,22,23,27,28,29,31,32,39,40,41,43,47,48,49,52,58,59,61,63,64,65,66,68,74,75];
    const[starship,setStarship]=useState([])
    useEffect(()=>{
        const cargarUsuarios=async()=>{
            const results=await axios(`https://swapi.dev/api/starships/${ids[id]}`)
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
        <div className="col animate__animated animate__fadeIn">
            <div className="card bg-dark">
                <div className="row no-gutter">
                    <div className="col-12 bg-warning">
                        <div className="card-body">
                            <h3>{starship.name}</h3>
                            <ul className="list-group list-group-flush  ">
                                <li className="list-group-item bg-warning"><b>modelo:</b> {starship.model}</li>
                                <li className="list-group-item bg-warning"><b>fabricante:</b> {starship.manufacturer}</li>
                                <li className="list-group-item bg-warning"><b>costo en creditos:</b> {starship.cost_in_credits}</li>
                                <li className="list-group-item bg-warning"><b>velocidad maxima en atmosfera</b>{starship.max_atmosphering_speed}</li>
                                <li className="list-group-item bg-warning"><b>tripulaciòn</b>{starship.crew}</li>
                                <li className="list-group-item bg-warning"><b>cantidad màxima de pasageros</b>{starship.passengers}</li>
                            </ul>
                            
                            
                            <button 
                                className="btn btn-outline-primary"
                                onClick={onReturn}
                            >
                                back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}