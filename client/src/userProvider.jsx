
import React, {useState, useContext} from 'react';

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext(){
  return useContext(userContext)
}

export function useUserToggleContext(){
  return useContext(userToggleContext)
}

export function UserProvider({children}){

  const [user, setUser] = useState({
    rol: "default",
    id: "00000"
  });

  const cambiaLogin = (rol, id) =>{
    if(rol){
      setUser({rol,id})
    }else{
      setUser({
        rol : "default",
        id: "00000"
      })
    }
  }
  
  return(
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiaLogin}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}