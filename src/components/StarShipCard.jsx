import { Link } from "react-router-dom"


export const StarShipCard=({starship,id})=>{

    return(
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutter">
                    <div className="col-12">
                        <div className="card-body">
                            <h5 className="card-title">{starship.name}</h5>

                            <p className="card-text">modelo: {starship.model} cm </p>
                                                        
                            <p className="card-text">
                                <small className="text-muted">fabricante: {starship.manufacturer} kg</small>
                            </p>

                            <Link to={`/starship/${id}`}>
                                más..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}