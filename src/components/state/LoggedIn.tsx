import { useState } from "react"


const LoggedIn = () => {
    //because of typescript inference (based on the initial value ) so we don't need type here (simple types)
    //but we do need to specify the data type for complex types

    const [loggedIn,setLoggedIn] = useState(false);  
    const handleLogin = () => {
        setLoggedIn(true);
    }
    
    const handleLogout = () => {
        setLoggedIn(false);
    }


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User is {loggedIn ? "logged in" : "logged out"}</p>
    </div>
  )
}

export default LoggedIn;