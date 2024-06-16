import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from 'react-router-dom'

function UserSignUpSuccess() {
  return (
    <>
    <div className='text-center mt-36 '>
    <CheckCircleIcon sx={{ fontSize: 60 }} color="success" />
        <h4  className='mb-2 mt-6'>Signup Successful, Welcome OnBoard!  </h4>
        <p  className='mb-10'><b>A mail as been sent to your email, To login into your Account kindly  click the button
         below..</b></p>
       <Link to='/loginpage'><button type="button" className="btn btn-primary">Login</button></Link>
    </div></>
  )
}

export default UserSignUpSuccess