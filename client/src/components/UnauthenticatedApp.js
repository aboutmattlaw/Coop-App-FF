import Signup from "./Signup"
import Signin from "./Signin"
import {Route} from "react-router-dom"


function UnauthenticatedApp({setCurrentUser}) {
    return(
  <>
            Unauthenticated App
            <Signup setCurrentUser={setCurrentUser}/>
            <Signin setCurrentUser={setCurrentUser}/>

    </>   
    )
}

export default UnauthenticatedApp