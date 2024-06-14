import React from 'react'

function Footer() {
    return (
        <div>
            <div className='bg-sky-950 h-auto - text-white Underline no-underline '>
                <div className='flex  gap-28 p-10'>
                    <div >
                        <h5>Infomation</h5>

                        <div className='mt-6'>
                            <p><a href="#">About Us</a></p>
                            <p><a href="#">FAQ</a></p>
                            <p><a href="#">Affiliate</a></p>
                            <p><a href="#">Private Policy</a></p>
                            <p><a href="#">Contact Us</a></p>
                            <p><a href="#">Terms and Condition</a></p>
                        </div>

                    </div>
                    <div>
                        <h5 >My Account</h5>
                        <div className='mt-6 '>
                            <p><a href="">My Orders</a></p>
                            <p><a href="">My reviews</a></p>
                            <p><a href="">My Account</a></p>
                        </div>


                    </div>

                    <div>
                        <h5>Cities</h5>

                        <div className='mt-6'>
                            <p><a href="">Lagos</a></p>
                            <p><a href="">Abuja</a></p>
                        </div>

                    </div>

                </div>
                <hr className='-mt-8 mx-20' />

                <div>
                    <div className='flex justify-evenly mt-4 '>
                        <div className=' border-solid border-1  bg-blue-800 rounded-lg rounded-bl-2xl text-center w-24 rounded-tr-3xl p-2  '><i className="fa-brands fa-facebook-f fa-fade text-3xl text-white" ></i></div>
                        <div className='border-solid border-1 rounded-lg bg-red-600 rounded-bl-2xl text-center w-24 rounded-tr-3xl p-2'><i className="fa-brands fa-google-plus fa-fade text-3xl text-white" ></i></div>
                        <div className='border-solid border-1 rounded-lg  bg-black rounded-bl-2xl text-center w-24 rounded-tr-3xl p-2'><i className="fa-brands fa-apple fa-fade text-3xl text-white"></i></div>
                        <div className=' border-solid border-1  bg-black rounded-lg rounded-bl-2xl text-center w-24 rounded-tr-3xl p-2  '><i className="fa-brands fa-x-twitter fa-fade text-3xl text-white"></i></div>
                    </div>
                    <p className='text-center text-slate-400 p-6 mt-4 '>Copyright © 2024 CookAway.ng</p>
                </div>

            </div>
  
        </div>
    )
}

export default Footer