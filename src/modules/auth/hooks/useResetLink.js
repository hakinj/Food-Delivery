import React, { useState } from 'react';
import { resetLink } from '../api';

function useResetLink() {
    const [resetResponse, setResetResponse] = useState({});

    const resetPassword = async (payload) => {
        const response = await resetLink(payload)
        const data = await response.data

        localStorage.setItem('details', JSON.stringify(data));
        setResetResponse(response.data)
    
        
    }
    return { resetPassword, resetResponse }

}

export default useResetLink