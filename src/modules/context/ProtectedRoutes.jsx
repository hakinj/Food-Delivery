import React, {createContext, useContext, useEffect} from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';


export const ProtectedRoutes = createContext();
function ProtectedRoutesProvider({children}) {
    const navigate = useNavigate();
    const {user} = useContext(CartContext);
    
    console.log(user);


    
        useEffect(()=>{
          if(!user){
            navigate('/loginpage');
              }
        }, [user])

      

    

    

  return (
    <ProtectedRoutes.Provider value={{user}}>
        {children}
    </ProtectedRoutes.Provider>
  )
}

export default ProtectedRoutesProvider