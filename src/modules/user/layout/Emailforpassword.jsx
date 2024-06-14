import React from 'react'

import Usernav from './Usernav'
import Footer from './Footer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function EmailforPassword() {
    return (
        <>
            <Usernav />
            <div className=' text-center m-auto h-96'>
                <p><b>Email sent successful. please check your email for the reset password link, <br /> <span>
                    copy the link to your browser and input your new Password.</span> </b></p>
                    <CheckCircleIcon sx={{ fontSize: 60 }} color="success" />

                

            </div>
            <Footer />
        </>
    )
}

export default EmailforPassword