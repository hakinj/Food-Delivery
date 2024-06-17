import React from 'react'
import navlogo2 from '../../user/bgimage/navlogo2.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import useLogoutAdmin from '../../auth/hooks/useLogoutAdmin'
import {Link} from 'react-router-dom'


function AdminNavDash() {
    const {logout} = useLogoutAdmin()
    return (
        < div style={{ marginBottom: '130px', }}>

            <nav className="navbar navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <div className=' w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                    <div>
                        <div className='flex line text-white none gap-20 '>
                        <Link to='/admindashboard'><b>Home</b></Link>
                        <Link to='#'><b>User</b></Link>
                         
                            <div class="dropdown">
                                <button class="dropbtn"><b>Service</b></button>
                                <div class="dropdown-content">
                                <Link to='/#'><b>Orders</b></Link>
                                <Link to='/ridersignup'><b>Riders</b></Link>
                                  
                                </div>
                            </div>
                            <Link to='/foodtypeinputpage'><b>Foodtype</b></Link>
                            <Link to='#'><b>Settings</b></Link>
                          
                        </div>
                        <div></div>
                    </div>



                    <div className=' pr-20'>
                        <LogoutIcon  title='logout' onClick={logout}/>

                    </div>



                </div>

            </nav>


        </div>
    )
}

export default AdminNavDash