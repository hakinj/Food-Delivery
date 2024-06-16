import React, {useEffect, useState, useMemo} from 'react';
import { getCurrentUser } from '../api';


function useGetCurrentUser() {
    const [currentUserLoggedIn, setCurrentUserLoggedIn]= useState(null)
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
  

    
    return{currentUserLoggedIn, user}

  
}

export default useGetCurrentUser