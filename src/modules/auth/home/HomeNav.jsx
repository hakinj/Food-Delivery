import React, { useContext } from 'react'
import navlogo2 from '../../user/bgimage/navlogo2.jpg'


function HomeNav() {
    
    return (
        < div style={{ marginBottom: '130px', }}>

        <nav className="navbar navbar-dark bg-dark fixed-top ">
            <div className="container-fluid">
                <div className=' w-44 ml-24'> <img src={navlogo2} alt="logo" /></div>

                <div>
                    <div className='flex line text-white none gap-20 '>
                        <a href="/adminlogin"> <b>Admin</b></a>
                        
                       
                        <a href="loginpage"><b>Make-Order</b></a>
                        <a href="/riderlogin"><b>Rider</b></a>
                    </div>
                    <div></div>
                </div>



                <div className='flex'>
                        <a className="navbar-brand  w-20 text-center -mt-1 " href="/loginpage">Contacts</a>
                    
                    <div className='mt-2.5 -ml-2 mr-2 ' style={{borderLeft: 'solid white 2px ', height: '16px'}}></div>
                   
                    <a className="navbar-brand -mt-1  w-20 text-center  " href="/signup">Abouts</a>
                    </div>



            </div>

        </nav>


    </div>
    )
}

export default HomeNav
