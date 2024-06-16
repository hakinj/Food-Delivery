import React, { useContext } from 'react'
import navlogo2 from '../bgimage/navlogo2.jpg'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


function Usernav() {
    const { cart, setCart } = useContext(CartContext)
    return (
        < div style={{ marginBottom: '130px', }}>

        <nav className="navbar navbar-dark bg-dark fixed-top ">
            <div className="nav-con container-fluid">
                <div className=' nav-img w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                <div>
                    <div className=' nav-word flex line text-white none gap-20 '>
                       
                        <Link to='/'> <b>About Us</b></Link>
                        <Link to='#'> <b>Contacts</b></Link>
                        <Link to='#'> <b>Location</b></Link>
              
                        
                       
                 
                    </div>
                    <div></div>
                </div>



                <div className='nav-btncon flex'>

                    <Link to='/loginpage'><button className=" nav-btn navbar-brand border-1 border-solid px-8 text-center rounded-xl -mt-1 hover:border-violet-700 hover:bg-violet-700 border-sky-500 bg-sky-500   " >Login</button></Link>
                    <div className='mt-2 -ml-2 mr-2 ' style={{borderLeft: 'solid white 2px ', height: '16px'}}></div>
                    <Link to='/signup'><button className="nav-btn navbar-brand -mt-1 border-1 border-solid px-6 text-center hover:border-violet-700 hover:bg-violet-700 rounded-xl border-sky-700 bg-sky-500  " >Signup</button></Link>
                    
                       
                    
                   
                   
                    
                    </div>



            </div>

        </nav>


    </div>
    )
}

export default Usernav
