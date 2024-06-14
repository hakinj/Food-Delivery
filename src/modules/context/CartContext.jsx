import React, { createContext, useEffect, useState } from 'react'
import useGetCurrentUser from '../auth/hooks/useGetCurrentUser';
import useGetCurrentAdmin from '../auth/hooks/useGetCurrentAdmin';
import useGetCurrentRider from '../auth/hooks/useGetCurrentRider';


export const CartContext = createContext()

function CartProvider({children}) {
    const [cart, setCart] = useState(localStorage.getItem("cartitem") ? JSON.parse(localStorage.getItem("cartitem")) : [])
    const {currentUserLoggedIn, user} = useGetCurrentUser();
    const { Admin, currentAdminLoggedIn} = useGetCurrentAdmin()
    const {Rider, currentRiderLoggedIn} = useGetCurrentRider()


    useEffect(()=>{

        localStorage.setItem('cartitem', JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{currentUserLoggedIn, user, cart, setCart, Rider, Admin, currentAdminLoggedIn, currentRiderLoggedIn }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider
