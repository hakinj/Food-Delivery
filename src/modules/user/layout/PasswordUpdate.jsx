import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailforPassword } from '../../auth/utils'
import useResetLink from '../../auth/hooks/useResetLink'



function PasswordUpdate() {
    const [state, dispatch] = useReducer(emailforPassword, {
        email: ''
    })
    const { resetPassword, resetResponse } = useResetLink()
    
    const navigate = useNavigate()


    useEffect(()=>{
        if(resetResponse?.success){
            navigate('/emailsuccessfulsent')
        }

    },[resetResponse, navigate])
    const handleReset = async (e) => {
        e.preventDefault()
        const response = await resetPassword(state)
        
    }

    return (
        <div>
            <form onSubmit={handleReset} className=' w-96 m-auto h-96 '>
                <input type="email" className=" form-control mb-8  " id="email" placeholder="Email address"
                    onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })} />
                <button  type="submit" className="btn btn-primary w-96 "><b>Submit</b></button>
            </form>



        </div>
    )
}

export default PasswordUpdate