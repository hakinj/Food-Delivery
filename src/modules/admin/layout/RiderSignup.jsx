import React, { useEffect, useReducer } from "react";
import useRiderSignup from "../../auth/hooks/useRiderSignup";
import { riderSigupReducer } from "../../auth/utils";
import { useNavigate } from "react-router-dom";
import rider3 from '../../images/riderBg/rider3.jpg';


function RiderSignup() {
    const [state, dispatch] = useReducer(riderSigupReducer, {
        name: '',
        email: '',
        password: '',
        phoneNum: '',
        rideType: '',
        ridePlateNum: ''
    });




   
    const { signupResponse, signUpRider } = useRiderSignup();
    const navigate = useNavigate()
    useEffect(()=>{
        if(signupResponse && signupResponse.success){
            navigate('/dashboard')
        }
        },[signupResponse, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signUpRider(state)
        console.log(signupResponse)

    }

    return (
        <>
            <div style={{ backgroundImage: `url("${rider3}")` }} className='flex flex-column items-center bg-no-repeat bg-cover bg-center bg-fixed -mt-20 p-20'>


                <form onSubmit={handleSubmit} className=' p-8  w-auto rounded-tl-3xl rounded-br-3xl border-solid border-2 border-neutral-50 bg-neutral-50'  >
                    <h3 className='-mt-4 pb-6 text-center '>Create Rider account</h3>
                    <hr className='-mt-4' />
                    <div className="form-floating mb-8 w-96 text-black  " >
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
                        <input type="number" className="form-control" id="floatingphone" placeholder="Phone Number"
                            onChange={(e) => dispatch({ type: "PHONENUM", payload: e.target.value })} />
                        <label htmlFor="phone">Enter Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingaddress" placeholder="rideType"
                            onChange={(e) => dispatch({ type: "RIDETYPE", payload: e.target.value })} />
                        <label htmlFor="ridetype">Enter Ride Type</label>
                    </div>
                    <div className="form-floating mb-8  " >
                        <input type="text" className="form-control" id="floatinglast" placeholder="ridePlateNum"
                            onChange={(e) => dispatch({ type: "RIDEPLATENUM", payload: e.target.value })} />
                        <label htmlFor="ridePlateNum">Enter rider plate number</label>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit"><b>Click to signup</b></button>

                    </div>


                </form>
            </div>

        </>
    )
}

export default RiderSignup