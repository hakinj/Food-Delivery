import React from 'react'
import { Link } from 'react-router-dom'
import Usernav from './Usernav'
import Footer from './Footer'

function PasswordUpdated() {
    return (
        <>
            <Usernav />
            <div className='text-center m-auto h-96'>
                <p>You,ve Successfully Updated Your Password!</p>
                <Link to='/loginpage'><button type="button" className="btn btn-success" >Click here to Login</button></Link>

            </div>
            <Footer />
        </>
    )
}

export default PasswordUpdated