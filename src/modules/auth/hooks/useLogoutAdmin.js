import React from 'react'
import {useNavigate} from 'react-router-dom'

function useLogoutAdmin() {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('adminToken');
        navigate('/loginpage');
    }
  return {logout}
}


export default useLogoutAdmin