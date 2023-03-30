import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar2 } from "../components/Navbar2"
import Inicio from "../pages/Inicio"
import { Personaje } from "../pages/Personaje"
import { Personajes } from "../pages/Personajes"
import { StarShip } from "../pages/StarShip"
import { StarShips } from "../pages/StarShips"


export const AppRouter=()=>{

    return (
        <>
            <Navbar2/>

            <div className="container bg-dark">
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="starships/:pages" element={<StarShips/>}/>
                    <Route path="personajes/:pages" element={<Personajes/>}/>

                    <Route path="people/:id/:page" element={<Personaje/>}/>
                    <Route path="/starship/:id/:page" element={<StarShip/>}/>

                    <Route path="/*" element={<Navigate to="/"/>}/>

                </Routes>
            </div>
        </>
    )
}