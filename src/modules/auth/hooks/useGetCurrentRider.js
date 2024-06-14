import React, {useEffect, useState, useMemo} from 'react';
import { getCurrentRider } from '../api';


function useGetCurrentRider() {
    const [currentRiderLoggedIn, setCurrentRiderLoggedIn]= useState({})
    const abortController = new AbortController();

    useEffect(()=>{
        const fetchCurrentRider = async ()=>{
            const response = await getCurrentRider();
            setCurrentRiderLoggedIn(response);    
        }
        fetchCurrentRider();
        return () => {
            abortController.abort();
        }

    },[]);

    const Rider = useMemo (() => currentRiderLoggedIn, [currentRiderLoggedIn]);
    

    console.log(Rider)
    return{currentRiderLoggedIn, Rider}

  
}

export default useGetCurrentRider