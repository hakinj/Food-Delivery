import React from 'react'
import navlogo2 from '../../user/bgimage/navlogo2.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'


function AdminNav() {
    return (
        < div style={{ marginBottom: '130px', }}>

            <nav className="navbar navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <div className=' w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                    <div>
                        <div className='flex line text-white none gap-20 '>
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/loginpage'><b>User</b></Link>
                        <Link to='/ridersignup'><b>Rider</b></Link>
                            
                            <div class="dropdown">
                                <button class="dropbtn"><b>Service</b></button>
                                <div class="dropdown-content">
                                <Link to='/loginpage'><b>user</b></Link>
                                <Link to='/ridersignup'><b>Rider</b></Link>
                                  
                                </div>
                            </div>
                           
                            
                        </div>
                        <div></div>
                    </div>


                    <div className='flex'>
                    <Link to='/adminlogin'><button className="navbar-brand -mt-1 border-1 border-white px-8 rounded-xl  " >login</button></Link>
                    
                    <div className='mt-2 -ml-2 mr-2 ' style={{borderLeft: 'solid white 2px ', height: '16px'}}></div>
                   
                    <Link to='/adminsignup'><button className="navbar-brand -mt-1 border-1 border-white px-6 rounded-xl Remtxt " >Signup</button></Link>
                    </div>




                </div>

            </nav>


        </div>
    )
}

export default AdminNav