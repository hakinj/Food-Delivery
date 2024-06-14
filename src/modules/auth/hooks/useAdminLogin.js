import {useState} from 'react';
import { adminLogin } from '../api';


function useAdminLogin() {
    const [loginResponse, setLoginResponse] = useState({});
    const loginAdmin = async (payload) => {
        const response = await adminLogin(payload)
        setLoginResponse(response)

    }
    
    return {loginResponse, loginAdmin}

}

export default useAdminLogin