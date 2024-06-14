import React from 'react';
import HomeNav from './HomeNav';
import Footer from '../../user/layout/Footer';
import homebg2 from '../../images/homeBg/homebg2.jpg'
import { Link } from 'react-router-dom';




function Homepage() {


    return (
        <>
            <HomeNav />
            <div style={{ backgroundImage: `url("${homebg2}")` }} className=' -mt-12 bg-no-repeat bg-cover bg-center bg-fixed' >
             <div className='p-10 h-96 text-white italic'>
                <h1 className='text-white   w-80 italic mb-6'>It Not Just Food, It An Experience</h1>
                <p >Click the button Below to login/signup as user and have an experince of a lifeTime</p>

                <div className='mt-8'>
             <Link to='/loginpage'><button type="button" className="btn btn-primary">Click here</button></Link>
             </div>
             </div>
            
             <div></div>
            </div>
            <Footer />
        </>

    )
}

export default Homepage