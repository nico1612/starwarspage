import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom"


export const Navbar =()=>{


    return(
        <header>
            <nav className="navbar bg-dark" data-bs-theme="dark">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    inicio
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className={(isActive)=>`nav-item nav-link ${isActive ? 'active':''}`}
                            to="/personajes"
                        >
                            personajes
                        </NavLink>

                        <NavLink 
                            className={(isActive)=> `nav-item nav-link ${isActive?'active':''}`} 
                            to="/starships"
                        >
                            naves
                        </NavLink>

                    </div>
                </div>
            </nav>1
        </header>
    )
}