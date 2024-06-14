import React, { useState, useEffect, useContext } from 'react'
import DashNav from '../layout/DashNav';
import Footer from '../layout/Footer'
import axios from 'axios';
import { Rating } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useNavigate } from 'react-router-dom'




function Dashboard() {
  const navigate = useNavigate()
  const { cart, setCart } = useContext(CartContext)
  const [data, setData] = useState(null)
  const [delivery, setDelivery] = useState(0)
  const [subtotal, setSubtotal] = useState([])
  const addToCart = (id, items) => {
    setDelivery(1000)
    setCart((prev) => {
      const itemExit = prev.findIndex((items) => items._id === id);
      if (itemExit < 0) {
        return [...prev, { ...items, quantity: 1, total: items.price, }]
      } else {
        items
        alert('product  already in cart');
        return [...prev];
      }
    });
  };

  const handleDelete = (id) => {
    setCart((prev) => prev.filter(item => item._id !== id))

  };

  const Increase = (id) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1, total: ((item.quantity + 1) * item.price) }
        } else return item
      })
    })
  }


  const decrease = (id) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity <= 1 ? 1 : item.quantity - 1, total: (item.price * (item.quantity <= 1 ? 1 : item.quantity - 1)) }
        } else return item
      })
    })
  }

  const totalPrice = subtotal.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  const totalPay = totalPrice + delivery


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3200/api/v3/getposted-food')
      const data = result.data

      const res = data.food

      setData(res)
    }; fetchData()

    if (cart.length === 0) {
      setDelivery(0)
    };

    const allTotal = cart.map((item) => { return item.total });
    setSubtotal(allTotal)

  }, [cart])

  const checkOut = () => {
    navigate('/checkoutpage')
  }

  return (
    <>
      <DashNav />
      <div className=' px-8 h-auto flex  mb-6 '>
        <div className='border-solid border-slate-50 border-1 bg-slate-50  h-96 sticky  top-20 bottom-20 rounded-lg pl-10 pr-4 '>
          <h1>Menu</h1>
          <hr className='-mt-2' />
          <div className='text-center '><p><b>carts</b></p>
            <p><b>Solid</b></p></div>

        </div>
        <div className=' pl-10 '>
          {
            data == null ? "" : data.map((item, index) => (
              <div key={index}>
                <div className='flex mb-20  ' >
                  <div className=' w-28 '><img src={`./dbimages/${item.image}`} className='h-28' />
                  </div>
                  <div className=' pl-8 w-60 h-auto '>
                    <h4 style={{ fontSize: '1rem' }}><b>{item.name}</b></h4>
                    <p className='w-80' style={{ fontSize: '0.9rem' }}><b>Desc:</b> {item.description}</p>
                    <div className='mt-3'><h5 style={{ fontSize: '0.8rem' }}> <b>price:</b> ₦{item.price}</h5>
                      <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                    </div>
                  </div>
                  <div className='h-28'>
                    <div className='pl-16 '>

                    </div >


                    <div className='pl-14'><button title='Add to Cart' onClick={() => { addToCart(item._id, item) }} className='  w-24 h-6  '><ControlPointIcon /> </button></div>
                  </div>

                </div>
                <hr className='-mt-16 ' />





              </div>

            ))
          }
        </div>

        <div style={{ margin: '0px 0px 0px 200px' }} className='  overflow-y-scroll  border-solid border-slate-50 bg-slate-50 border-1 sticky h-96 mb-8 w-auto top-20 py-6 px-4 rounded-lg '>
          <div className='italic '>
            <h3 className=''>Your Cart</h3>
          </div>

          {
            cart?.map((cartitem, index) => (
              <div key={index} className='py-2'>
                <div className='flex justify-between '>
                  <h6><b>{cartitem.quantity}x</b> {cartitem.name}</h6>
                  <p >₦{cartitem.total}</p>
                </div>


                <div className='flex justify-between -mt-4'>
                  <div className=' mb-2 gap-1 flex'>
                    <button onClick={() => { decrease(cartitem._id) }} className='border-solid border-green-400 border-1 w-8  bg-green-400 text-white rounded-lg '>-</button>
                    {cartitem.quantity}
                    <button onClick={() => { Increase(cartitem._id) }} className='border-solid border-green-400 border-1 w-8 bg-green-400 text-white rounded-lg'>+</button>


                  </div >
                  <div style={{ border: ' 1px solid red', borderRadius: '50%' }} className=' bg-red-600 h-4 w-4 text-center '>
                    <button title='cancel' onClick={() => { handleDelete(cartitem._id) }} className=' bottom-1.5 left-0  right-2   relative'>x</button>
                  </div>
                </div>

              </div>

            ))
          }


          <div className=''>
            <div className='flex justify-between mt-8'><p>subtotal</p>
              <p>₦{totalPrice}</p></div>

            <div className='flex justify-between -mt-4'><p>delivery fee</p>
              <p>₦{delivery}</p></div>

            <hr className='-mt-2' />

            <div className='flex justify-between'><p>amount payable</p>
              <p>{totalPay}</p></div>


            <div className=' flex justify-center '><button onClick={checkOut} type="button" className=" items-center btn btn-primary w-96">place order now</button></div>



          </div>

        </div>





      </div>



      <Footer />
    </>
  )
}

export default Dashboard


