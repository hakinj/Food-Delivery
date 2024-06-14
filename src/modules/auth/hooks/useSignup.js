import react, {useState} from 'react';
import {signupUser} from '../api'



function useSignupUser(){
    const [userResponse, setUserResponse] = useState({})
    const signUp = async (payload) => {
        const response = await signupUser(payload);
        const data = await response.data
        console.log(data)
        setUserResponse(data)
        localStorage.setItem('user', JSON.stringify(data.savedUser))
        return response
    }
    return { signUp, userResponse}
}

export default useSignupUser