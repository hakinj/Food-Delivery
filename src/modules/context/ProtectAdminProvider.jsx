import React, {createContext, useContext, useEffect} from 'react';
    import { CartContext } from './CartContext';
    import { useNavigate } from 'react-router-dom';


    export const ProtectedAdminRoutes = createContext();
function ProtectAdminProvider({children}) {
    
    
        const navigate = useNavigate()
        const {Admin} = useContext(CartContext)
        console.log(Admin)
        useEffect(()=>{
            if(!Admin.name){
                navigate('/adminlogin');
            }
        
        },[Admin])
      return (
        <ProtectedAdminRoutes.Provider >
            {children}
        </ProtectedAdminRoutes.Provider>
      )
    }
    


export default ProtectAdminProvider