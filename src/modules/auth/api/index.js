
import axios from 'axios';
const BASE_URL = "https://food-delivery-server-ug8j.onrender.com";



export const signupUser = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/signup-user`, payload, {
            withCredentials: true

        });
        return response;
    } catch (error) {

    }

}

export const loginUser = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/login-user`, payload, {
            withCredentials: true
        });
        return response

    }
    catch (error) {


    }
};

export const resetLink = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/sendresetlink`, payload, {
            withCredentials: true

        });

        return response
    }
    catch (error) {

    }
}


export const adminSignup = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v2/signup-admin`, payload, {
            withCredentials: true
        });
        return response

    }
    catch (error) {
        console.log(error.message)
    }
}

export const adminLogin = async ( payload) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v2/login-admin`, payload, {
            withCredentials: true
        });
        return response

    }
    catch(error){
        console.log(error.message)
    }
} 
 export const riderSignup = async (payload) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v2/signup-rider`, payload, {
            withCredentials: true
        });
        return response

    }
    catch(error) {
        return err.message
    }
 }

 export const riderLogin = async (payload) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v2/login-rider`, payload, {
            withCredentials: true
        });
        return response
    }
    catch(error){
        return err.message
    }
 };


 export const getCurrentUser = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/api/v1/current-user`,{
            headers:{
                Authorization:`Bearer ${JSON.parse(localStorage.getItem("userToken"))}`
            }
        });
       
        const result = await response.data.loggedInUser;
    
        return result

    }
    catch(err){
        console.log(err)
        return err.message
       
    }
 };

 export const getCurrentRider = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/api/v2/current-rider`,{
            headers:{
                Authorization:`Bearer ${JSON.parse(localStorage.getItem("riderToken"))}`
            }
        });
       
        const result = await response.data.loggedInUser;
        console.log(result)
        return result

    }
    catch(err){
        console.log(err)
        return err.message
       
    }
 }

 export const getCurrentAdmin = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/api/v2/current-admin`,{
            headers:{
                Authorization:`Bearer ${JSON.parse(localStorage.getItem("adminToken"))}`
            }
        });
       
        const result = await response.data.loggedInUser;
        console.log(result)
        return result

    }
    catch(err){
        console.log(err)
        return err.message
       
    }
 }
 
 
 