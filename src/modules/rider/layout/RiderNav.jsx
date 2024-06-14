import React from 'react'
import navlogo2 from '../../user/bgimage/navlogo2.jpg'

function RiderNav() {
  return (
    < div style={{ marginBottom: '130px', }}>

            <nav className="navbar navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">User</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Admin</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Rider</a>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className='  w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                    <div className='flex'>
                        <a className="navbar-brand -mt-1 " href="#">Login</a>
                    
                    <div className='mt-2.5 -ml-2 mr-2 ' style={{borderLeft: 'solid white 2px ', height: '16px'}}></div>
                   
                    <a className="navbar-brand -mt-1 " href="#">Signup</a>
                    </div>



                </div>

            </nav>


        </div>
  )
}

export default RiderNav