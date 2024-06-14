import React, {useEffect, useReducer} from 'react'
import useAdminSignup from '../../auth/hooks/useAdminSignup';
import { adminSignUpResucer } from '../../auth/utils';
import { useNavigate } from 'react-router-dom';
import admin2 from '../../images/adminBg/admin2.jpg'

function Signupform() {
    const [state, dispatch] = useReducer(adminSignUpResucer, {name: "", email: "", password: "", role: ""})
    const navigate = useNavigate()
    const {signupResponse, signUpAdmin} = useAdminSignup()

    useEffect(()=>{
        if(signupResponse && signupResponse.success){
            navigate('/dashboard')
        }

    },[signupResponse, navigate])

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const response = await signUpAdmin(state)
       
    }


    return (
        <>
            <div style={{ backgroundImage: `url("${admin2}")` }} className='flex flex-column items-center bg-no-repeat bg-cover bg-center bg-fixed -mt-20 p-20'>


                <form onSubmit={handleSubmit} className=' p-8  w-auto rounded-tl-3xl rounded-br-3xl border-solid border-2 border-neutral-50 bg-neutral-50'  >
                    <h3 className='-mt-4 pb-6 text-center '>Create a new account</h3>
                    <hr className='-mt-4' />

                    <div className="form-floating mb-8 w-96  text-black  " >
                        <input type="text" className="  form-control" id="floatingfirst" placeholder="name "
                            onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })} required />
                        <label htmlFor="name">Enter Name</label>
                    </div>


                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingemail" placeholder="Email"
                            onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })} />
                        <label htmlFor="email">Enter Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => dispatch({ type: "PASSWORD", payload: e.target.value })} />
                        <label htmlFor="floatingPassword">Enter Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingaddress" placeholder="Role"
                            onChange={(e) => dispatch({ type: "ROLE", payload: e.target.value })} />
                        <label htmlFor="address">Role</label>
                    </div>


                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit"><b>Click to signup</b></button>

                    </div>


                </form>

            </div>
        </>
    )
}

export default Signupform