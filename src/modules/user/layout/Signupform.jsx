import React, { useReducer, useState, useEffect } from 'react';
import image7 from '../bgimage/image7.jpg';
import { useNavigate } from 'react-router-dom';
import { signUpreducer } from '../../auth/utils';
import useSignupUser from '../../auth/hooks/useSignup';
import { Link } from 'react-router-dom';



function Signupform() {
    const [isLoading, setIsloading] = useState(false)
    const [state, dispatch] = useReducer(signUpreducer, {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
        phoneNum: ""
    });
    const navigate = useNavigate();
    const { signUp, userResponse } = useSignupUser()

    useEffect(()=>{
        if (userResponse && userResponse.success) {
           
            navigate('/dashboard')
        }
    },[userResponse, navigate])

    const submitForm = async (e) => {
        e.preventDefault()
        setIsloading(true)
        const res = await signUp(state)

       
    }
    
    
    return (
        <div>
            <div style={{ backgroundImage: `url("${image7}")` }} className='flex flex-column items-center bg-no-repeat bg-cover bg-center bg-fixed -mt-20 p-20'>


                <form onSubmit={submitForm}  className=' p-8  w-auto rounded-tl-3xl rounded-br-3xl border-solid border-2 border-neutral-50 bg-neutral-50'  >
                    <h3 className='-mt-4 pb-6 text-center '>Create a new account</h3>
                    <hr className='-mt-4' />
                    <div className='flex gap-2'>
                        <div className="form-floating mb-8 w-60 text-black  " >
                            <input type="text" className="  form-control" id="floatingfirst" placeholder="Firstname "
                                onChange={(e) => dispatch({ type: "FIRSTNAME", payload: e.target.value })} required />
                            <label htmlFor="fistname">Enter Firstname</label>
                        </div>
                        <div className="form-floating mb-8 w-60 " >
                            <input type="text" className="form-control" id="floatinglast" placeholder="Lastname"
                                onChange={(e) => dispatch({ type: "LASTNAME", payload: e.target.value })} />
                            <label htmlFor="Lastname">Enter Lastname</label>
                        </div>
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
                        <input type="text" className="form-control" id="floatingaddress" placeholder="Address"
                            onChange={(e) => dispatch({ type: "ADDRESS", payload: e.target.value })} />
                        <label htmlFor="address">Enter Your Full Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingphone" placeholder="Phone Number"
                            onChange={(e) => dispatch({ type: "TELEPHONE", payload: e.target.value })} />
                        <label htmlFor="phone">Enter Phone Number</label>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit"><b>Click to signup</b></button>

                    </div>


                </form>
                <div className='flex flex-column items-center mt-4 p-10 w-96 rounded-tr-3xl rounded-bl-3xl border-solid border-2 bg-neutral-50 border-neutral-50'>
                    <h4>Already a member? </h4>
                    <p>login now and to order htmlFor your meal and have it deliver to you at the spead of light</p>
                    <Link to='/loginpage'><button type="button" className="btn btn-primary">LOGIN NOW!</button></Link>
                    

                </div>
            </div>
        </div>
    )
}

export default Signupform