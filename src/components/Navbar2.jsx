import { Link, NavLink } from "react-router-dom"
import Star_Wars_Logo from "../imagenes/Star_Wars_Logo.svg"


export const Navbar2 =()=>{

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    home
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> hola</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <NavLink
                                className={(isActive)=>`nav-item nav-link ${isActive ? 'active':''}`}
                                to="/personajes"
                            >
                                personajes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={(isActive)=> `nav-item nav-link ${isActive?'active':''}`} 
                                to="/starships"
                            >
                                naves
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}