import React, {useEffect, useState, useMemo} from 'react';
import { getCurrentAdmin } from '../api';


function useGetCurrentAdmin() {
    const [currentAdminLoggedIn, setCurrentAdminLoggedIn]= useState(null)
    const abortController = new AbortController();

    useEffect(()=>{
        const fetchCurrentAdmin = async ()=>{
            const response = await getCurrentAdmin();
            setCurrentAdminLoggedIn(response);    
        }
        fetchCurrentAdmin();
        return () => {
            abortController.abort();
        }

    },[]);

    const Admin = useMemo (() => currentAdminLoggedIn, [currentAdminLoggedIn]);
    

    console.log(Admin)
    return{currentAdminLoggedIn, Admin}

  
}

export default useGetCurrentAdmin