import { useState } from "react"


type AuthUser = {
    name: string,
    email: string
}

const User = () => {

    // for complex data type , we need to specify the explicitly the type
    // Type assertion  , we are sure from the type of the user data & it's not null
    const [user,setUser] = useState<AuthUser>({} as AuthUser);  
    const handleLogin = () => {
        setUser({
            name: "John",
            email: "John@hotmail.com"
        });
    }
    

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* we removed ? optional operator bcz we are sure that the user won't be null */}
        <p>User name is {user.name}</p> 
        <p>User email is {user.email}</p>
    </div>
  )
}

export default User;