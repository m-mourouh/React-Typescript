import { useContext } from "react";
import { UserContext } from "./UserContext";
const Userr = () => {
    const userContext = useContext(UserContext);

    const userLogin = ():void => {
            userContext.setUser({
                name: "Mohamed",
                email: "mohamed@gmail.com"
            });
    
    }
    const userLogout = ():void => {
            userContext.setUser(null) ;
        
    }
  return (
    <div>
      <button onClick={userLogin}>Login</button>
      <button onClick={userLogout}>Logout</button>
      <p>user name: {userContext.user?.name}</p>
      <p>user email: {userContext.user?.email}</p>
    </div>
  )
}

export default Userr;
