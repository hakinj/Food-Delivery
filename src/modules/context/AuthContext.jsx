import React, {createContext} from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthenticContext = createContext()

function AuthContext({children}) {
    


    
    return (
      <AuthenticContext.Provider value={{currentUserLoggedIn, user}} >
       {children}
      </AuthenticContext.Provider>
    )
  }
  

export default AuthContext