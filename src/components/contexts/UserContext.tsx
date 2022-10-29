import { useState, createContext } from "react";

interface AuthUser {
    name: string;
    email: string
};

interface UserContextPropsInterface {
    children: React.ReactNode
}

interface UserContextInterface  {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

export const UserContextProvider = ({ children }: UserContextPropsInterface) => {
    const [user,setUser] = useState<AuthUser | null>(null); 
    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}


