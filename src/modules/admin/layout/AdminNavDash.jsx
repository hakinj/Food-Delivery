import React from 'react'
import navlogo2 from '../../user/bgimage/navlogo2.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'


function AdminNavDash() {
    return (
        < div style={{ marginBottom: '130px', }}>

            <nav className="navbar navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <div className=' w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                    <div>
                        <div className='flex line text-white none gap-20 '>
                            <a href=""> <b>Home</b></a>
                            <div class="dropdown">
                                <button class="dropbtn"><b>Service</b></button>
                                <div class="dropdown-content">
                                    <a href="#">Orders</a>
                                    <a href="#">Rider</a>
                                  
                                </div>
                            </div>
                           
                            <a href="/foodtypeinputpage"><b>Foodtype</b></a>
                            <a href=""><b>Settings</b></a>
                        </div>
                        <div></div>
                    </div>



                    <div className=' pr-20'>
                        <Link title='logout'><LogoutIcon /></Link>

                    </div>



                </div>

            </nav>


        </div>
    )
}

export default AdminNavDash