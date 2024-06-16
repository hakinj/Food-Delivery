import React from 'react';
import {useNavigate} from 'react-router-dom';


function useLogoutUser() {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('userToken');
        navigate('/loginpage');
    }
  return {logout}
}

export default useLogoutUser;