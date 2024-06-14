import React, { useEffect, useReducer } from 'react';
import useRiderlogin from '../../auth/hooks/useRiderlogin';
import { riderLoginReducer } from '../../auth/utils';
import { useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom'
import rider1 from '../../images/riderBg/rider1.jpg'


function RiderloginForm() {
    const [state, dispatch] = useReducer(riderLoginReducer, {email: '', password: ''})
    const {loginResponse, loginRider} = useRiderlogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await loginRider(state);
        console.log(loginResponse)
    }

    useEffect(()=>{
   if(loginResponse?.data?.success){
    navigate('/riderdashboard')
    localStorage.setItem('riderToken', JSON.stringify(loginResponse.data.token))

   }

    },[loginResponse])

    return (
        <>
        <div style={{ backgroundImage: `url("${rider1}")` }} className='flex flex-column items-center bg-no-repeat bg-cover bg-center bg-fixed -mt-20 p-20' >
                <form onSubmit={handleSubmit} className='flex flex-column items-center p-8  w-96 rounded-tl-3xl rounded-br-3xl border-solid border-2 border-neutral-50 bg-neutral-50'  >
                    <h1 className='-mt-4 pb-6 text-center '> Rider Login</h1>
                    <div>

                        <div className="form-floating mb-8  w-80 text-black  " >
                            <input type="email" className=" form-control" id="email" placeholder="Email address"
                                onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-8 w-80 " >
                            <input type="password" className="form-control" id="password" placeholder="Password"
                                onChange={(e) => dispatch({ type: 'PASSWORD', payload: e.target.value })} />
                            <label htmlFor="floatingPassword">Password</label>
                            <Link to='/sendemailtoresetpassword'><button className=' text-red-500 '>Forget password</button></Link>
                        </div>

                        <button type="submit" className="btn btn-primary w-80">Login</button>

                        <div className='flex justify-evenly gap-2 mt-4 '>
                            <div className=' border-solid border-1  bg-blue-800 rounded-lg rounded-bl-3xl text-center w-24 rounded-tr-3xl p-2  '><i className="fa-brands fa-facebook-f fa-fade text-3xl text-white" ></i></div>
                            <div className='border-solid border-1 rounded-lg bg-red-600 rounded-bl-3xl text-center w-24 rounded-tr-3xl p-2'><i className="fa-brands fa-google-plus fa-fade text-3xl text-white" ></i></div>
                            <div className='border-solid border-1 rounded-lg  bg-black rounded-bl-3xl text-center w-24 rounded-tr-3xl p-2'><i className="fa-brands fa-apple fa-fade text-3xl text-white"></i></div>
                        </div>

                    </div>
                </form>
                </div>
        </>
    )
}

export default RiderloginForm