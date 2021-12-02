import Signup from "./Signup"
import Signin from "./Signin"
import {Link, Routes, Route} from 'react-router-dom'



// Would like to better understand ROUTER and know how to have these forms on different pages. 

function UnauthenticatedApp({setCurrentUser}) {
    return (
        <>


        <Routes>
            <Route path="/" element={<Signup setCurrentUser={setCurrentUser} />} />
            <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} />} />
        </Routes>


{/* 
            <Signin setCurrentUser={setCurrentUser}/>

            <Link to="/signin">Sign In</Link>


            <Signup setCurrentUser={setCurrentUser}/> */}


        </>
    )
}

export default UnauthenticatedApp
