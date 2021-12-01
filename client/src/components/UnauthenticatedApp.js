import Signup from "./Signup"
import Signin from "./Signin"
import {Routes, Route} from "react-router-dom"



// Would like to better understand ROUTER and know how to have these forms on different pages. 

function UnauthenticatedApp({setCurrentUser}) {
    return (
        <>



            <Signin setCurrentUser={setCurrentUser}/>

            <Signup setCurrentUser={setCurrentUser}/>


        </>
    )
}

export default UnauthenticatedApp
