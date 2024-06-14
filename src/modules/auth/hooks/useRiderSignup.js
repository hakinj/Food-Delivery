import React, {useState} from "react";
import { riderSignup } from "../api";



function useRiderSignup(){
    const [signupResponse, setsignupResponse] = useState({})
    const signUpRider = async (payload) =>{
        const response = await riderSignup(payload);
        const data = await response.data;
        setsignupResponse(data)

    }
    return {signupResponse, signUpRider}

}

export default useRiderSignup