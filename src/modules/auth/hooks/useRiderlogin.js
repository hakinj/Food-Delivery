import React, {useState} from 'react';
import { riderLogin } from '../api';



function useRiderlogin() {
    const [loginResponse, setLoginResponse] = useState({});
    const loginRider = async (payload) =>{
        const response = await  riderLogin(payload)
        const data = response.data
        setLoginResponse(response)
    }


  return {loginResponse, loginRider}
}

export default useRiderlogin