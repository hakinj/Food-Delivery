import React, { useContext } from 'react'
import navlogo2 from '../bgimage/navlogo2.jpg'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


function Usernav() {
    const { cart, setCart } = useContext(CartContext)
    return (
        < div style={{ marginBottom: '130px', }}>

        <nav className="navbar navbar-dark bg-dark fixed-top ">
            <div className="container-fluid">
                <div className=' w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                <div>
                    <div className='flex line text-white none gap-20 '>
                        <a href=""> <b>About Us</b></a>
              
                        
                       
                        <a href=""><b>Contacts</b></a>
                        <a href=""><b>Location</b></a>
                    </div>
                    <div></div>
                </div>



                <div className='flex'>

                    <Link to='/loginpage'><b className="navbar-brand border-1 border-solid px-10 text-center rounded-xl -mt-1 hover:border-violet-700 hover:bg-violet-700 border-sky-500 bg-sky-500 " >Login</b></Link>
                    <div className='mt-2.5 -ml-2 mr-2 ' style={{borderLeft: 'solid white 2px ', height: '16px'}}></div>
                    <Link to='/signup'><b className="navbar-brand -mt-1 border-1 border-solid px-10 text-center hover:border-violet-700 hover:bg-violet-700 rounded-xl border-sky-500 bg-sky-500 " >Signup</b></Link>
                    
                       
                    
                   
                   
                    
                    </div>



            </div>

        </nav>


    </div>
    )
}

export default Usernav
