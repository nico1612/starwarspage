import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";


export const Personaje=()=>{
    const navigate=useNavigate()
    const {id,page}= useParams();
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
        navigate(`/personajes/${page}`)
    }

    if(!personaje){
        return <Navigate to="/personajes" />
    }
    return(
        <div className="col animate__animated animate__fadeIn">
            <div className="card bg-dark">
                <div className="row no-gutter">
                    <div className="col-12 bg-warning">
                        <div className="card-body">
                            <h3>{personaje.name}</h3>
                            <ul className="list-group list-group-flush bg-dark">
                                <li className="list-group-item bg-warning"><b>altura:</b> {personaje.height}</li>
                                <li className="list-group-item bg-warning"><b>peso:</b> {personaje.mass}</li>
                                <li className="list-group-item bg-warning"><b>color de pelo:</b> {personaje.hair_color}</li>
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