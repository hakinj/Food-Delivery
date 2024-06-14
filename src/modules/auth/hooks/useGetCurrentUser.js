import React, {useEffect, useState, useMemo} from 'react';
import { getCurrentUser } from '../api';


function useGetCurrentUser() {
    const [currentUserLoggedIn, setCurrentUserLoggedIn]= useState({})
    const abortController = new AbortController();

    useEffect(()=>{
        const fetchCurrentUser = async ()=>{
            const response = await getCurrentUser();
            setCurrentUserLoggedIn(response);    
        }
        fetchCurrentUser();
        return () => {
            abortController.abort();
        }

    },[]);

    const user = useMemo (() => currentUserLoggedIn, [currentUserLoggedIn]);
    console.log(currentUserLoggedIn)

    console.log(user)
    return{currentUserLoggedIn, user}

  
}

export default useGetCurrentUser