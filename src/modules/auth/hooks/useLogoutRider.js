import React from 'react'
import {useNavigate} from 'react-router-dom'

function useLogoutRider() {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('userRider');
        navigate('/loginpage');
    }
  return {logout}
}

export default useLogoutRider