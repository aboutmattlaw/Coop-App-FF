import Signup from "./Signup"
import Signin from "./Signin"
import {Routes, Route} from "react-router-dom"


function UnauthenticatedApp({setCurrentUser}) {
    return(
  <>




              <Signin setCurrentUser={setCurrentUser}/>
  
              <Signup setCurrentUser={setCurrentUser}/>




    
    </>   
    )
}

export default UnauthenticatedApp