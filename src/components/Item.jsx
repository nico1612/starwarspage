import { NavLink } from "react-router-dom"


export const Item=({name,path,id})=>{

    return(
        <NavLink to={`/${path}/${id}`} >
            {console.log(name)}
            Nombre: {name}
            <br/>
        </NavLink>
    )
}