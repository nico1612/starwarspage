import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Navbar2 } from "../components/Navbar2"
import Inicio from "../pages/Inicio"
import { Personaje } from "../pages/Personaje"
import { Personajes } from "../pages/Personajes"
import { StarShip } from "../pages/StarShip"
import { StarShips } from "../pages/StarShips"


export const AppRouter=()=>{

    return (
        <>
            <header>
                <Navbar2/>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="starships" element={<StarShips/>}/>
                    <Route path="personajes" element={<Personajes/>}/>

                    <Route path="people/:id" element={<Personaje/>}/>
                    <Route path="starship/:id" element={<StarShip/>}/>

                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </>
    )
}