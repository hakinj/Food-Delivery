import React,{useContext} from 'react'
import navlogo2 from '../bgimage/navlogo2.jpg'
import {AddShoppingCart} from '@mui/icons-material';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import useLogoutUser from '../../auth/hooks/useLogoutUser'


function DashNav() {
    const { cart, setCart } = useContext(CartContext)
    const {logout} = useLogoutUser()
    return (
        < div className='nav-bar' style={{ marginBottom: '130px', }}>
            

            <nav className="navbar navbar-light bg-light fixed-top ">
            
                <div className="  container-fluid">
                  <div className=' nav-img w-44 ml-14'> <img src={navlogo2} alt="logo" /></div>

                    
                    <div className=' flex gap-5 '>
                       <h5> <b>home</b> </h5>
                       <h5> <b>menu</b> </h5>
                       <h5> <b>Contacts</b> </h5>
                       <h5> <b>About</b> </h5>
                        
                    </div>

                    

                    <div className='flex pr-10'>
                        <a className="navbar-brand -mt-1  " href="#"><b>Location</b></a>

                        <div className='mt-2.5 -ml-2 mr-2 ' style={{ borderLeft: 'solid black 2px ', height: '16px' }}></div>

                        <div><div className='relative'><a className="navbar-brand -mt-1 " href="#"><AddShoppingCart/></a></div>
                        <div className='absolute right-  top-2 w-6 h-6 text-center bg-red-900 text-white ' style={{ border: '1px solid red', borderRadius: '50%' }}>{cart.length}</div></div>
                       <div className='px-4' title='logout'> <LogoutIcon onClick={logout}/></div>
                    </div>



                </div>

            </nav>


        </div>
    )
}

export default DashNav