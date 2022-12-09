import Context from "@mui/base/TabsUnstyled/TabsContext";
import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export interface IUserData 
{
    id: string, 
    username: string,
    token: string
}

const defaultUserData : IUserData = {
    id: '',
    username: '',
    token: ''
}

interface UserContextProps 
{
    userData : IUserData,
    setUserData : Dispatch<SetStateAction<IUserData>>
}

interface UserProviderProps extends PropsWithChildren
{
    
}

const UserContext = createContext<UserContextProps>(undefined as any);

export function UserProvider ({children} : UserProviderProps)
{
    const [userData, setUserData] = useState<IUserData>(defaultUserData);

    const value = {userData, setUserData};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
export {UserContext}