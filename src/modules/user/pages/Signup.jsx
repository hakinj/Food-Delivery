import React ,{useState} from 'react';
import Signupform from '../layout/Signupform';
import Usernav from '../layout/Usernav';
import Footer from '../layout/Footer';


function Signup() {
 
  return (
    <>
    <Usernav/>
  <Signupform/> 
     <Footer/>
    </>
  )
}

export default Signup