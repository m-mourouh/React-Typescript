import { useState } from "react"


type AuthUser = {
    name: string,
    email: string
}

const User = () => {

    // for complex data type , we need to specify the explicitly the type  
    const [user,setUser] = useState<AuthUser | null>(null);  
    const handleLogin = () => {
        setUser({
            name: "John",
            email: "John@hotmail.com"
        });
    }
    
    const handleLogout = () => {
        setUser(null);
    }


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User name is {user?.name}</p> 
        <p>User email is {user?.email}</p>
    </div>
  )
}

export default User;