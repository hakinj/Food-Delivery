import React, { useState } from 'react';
import { loginUser } from '../api';


function useLoginUser() {
    const [loginResponse, setLoginResponse] = useState({});

    const UserLogin = async (payload) => {
        const response = await loginUser(payload);
        setLoginResponse(response);
  
       
    }
    return { UserLogin, loginResponse };

}
export default useLoginUser