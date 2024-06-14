import {useState} from 'react'
import {adminSignup} from '../api'


function useAdminSignup() {
    const [signupResponse, setsignupResponse] = useState({})

    const signUpAdmin = async (payload)=>{
        const response = await adminSignup(payload)
        const data = response.data
      
        setsignupResponse(data)
        
    }
    
    return {signupResponse, signUpAdmin}


}
export default useAdminSignup