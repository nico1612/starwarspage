import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";


export const Personaje=()=>{
    const {id}= useParams();
    let ids=parseInt(id,10)
    if(ids>=17){
        ids=ids+2
    }
    else{
        ids=ids+1
    }


    const[personaje,setPersonaje]=useState([])
    useEffect(()=>{
        const cargarUsuarios=async()=>{
            const results=await axios(`https://swapi.dev/api/people/${ids}`)
            setPersonaje(results.data)
        }
        cargarUsuarios()
    },[])

    const onReturn=()=>{
        Navigate(-1)
    }

    if(!personaje){
        return <Navigate to="/personajes" />
    }
    return(
        <div className="row mt-5">
                
                <div className="col-8">
                    <h3>{personaje.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>altura:</b> {personaje.height}</li>
                        <li className="list-group-item"><b>peso:</b> {personaje.mass}</li>
                        <li className="list-group-item"><b>color de pelo:</b> {personaje.hair_color}</li>
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