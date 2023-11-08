
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
    rol: "defecto",
    id: "defecto"
  });

  const cambiaLogin = (rol, id) =>{
    if(rol){
      setUser({rol,id})
    }else{
      setUser({
        rol : "defecto",
        id: "defecto"
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