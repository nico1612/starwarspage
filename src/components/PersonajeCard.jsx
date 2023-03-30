import { Link } from "react-router-dom"

export const PersonajeCard =({personaje,id,page})=>{
    return(
        <div className="col animate__animated animate__fadeIn">
            <div className="card bg-warning">
                <div className="row no-gutter">
                    <div className="col-12">
                        <div className="card-body">
                            <h5 className="card-title">{personaje.name}</h5>

                            <p className="card-text">{personaje.height} cm </p>
                                                        
                            <p className="card-text">
                                <small className="text-muted">{personaje.mass} kg</small>
                            </p>

                            <Link to={`/people/${id}/${page}`}>
                                más..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}