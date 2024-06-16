import React, {createContext, useContext, useEffect} from 'react';
    import { CartContext } from './CartContext';
    import { useNavigate } from 'react-router-dom';


    export const ProtectedRiderRoutes = createContext();
function ProtectRiderProvider({children}) {
    
    
    
    
    
        const navigate = useNavigate()
        const {Rider} = useContext(CartContext)
        console.log(Rider)
        useEffect(()=>{
            if(!Rider?.name){
                navigate('/riderlogin');
            }
        
        },[Rider])
      return (
        <ProtectedRiderRoutes.Provider >
            {children}
        </ProtectedRiderRoutes.Provider>
      )
    }
    


export default ProtectRiderProvider