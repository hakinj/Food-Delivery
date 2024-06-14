import React from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../layout/AdminNav';
import Footer from '../../user/layout/Footer';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Uploaded() {

  return (
    <>
    <AdminNav/>
    <div className="container-fluid">
    <div className='h-96 text-center '>
    <h4 className='mb-8'>You,ve Successful Upload Food Type to the Database </h4>
        <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
        <br />
    
   

    <Link to="/foodtypeinputpage"><button className="btn btn-primary w-32 mt-8 ">Back</button></Link>
        

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Uploaded