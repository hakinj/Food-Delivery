import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function RecieptPage() {
  const { cart, setCart } = useContext(CartContext)
  const [date, setDate] = useState()
  const [delivery, setDelivery] = useState(0)
  const [subtotal, setSubtotal] = useState([])
  const totalPrice = subtotal.reduce(function (acc, curr) {
    return acc + curr;
}, 0);

const totalPay = totalPrice + delivery



    

  useEffect(() => {
    // window.onbeforeunload = closingCode;
    // function closingCode(){
    //   localStorage.removeItem("cartitem");
    // }

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    let time = today.toLocaleTimeString();
    const formattedDate = `${mm}.${dd}.${yyyy}/${time}`;
    setDate(formattedDate)


    if(cart.length >=1){
      setDelivery(1000)
    };

    const allTotal = cart.map((item) => { return item.total });
    setSubtotal(allTotal)

  }, [cart])


  
  return (
    <>
      <div className='flex justify-center mt-10'>
        <div className='border-1 border-gray h-auto w-96 bg-slate-100 italic text-center rounded-lg  p-4 mb-8'>
          <h5>CookAway Restuarant</h5>
          <p>CookAway Food Service company <br /> <span> 24 unity 14th street, unity estate Ajah lagos</span></p>
          <p className='-mt-4'>www.cookawayfood.com</p>
          <p className='-mt-1'>**************************************************</p>

          {
          cart?.map((item, index) => (
            <div key={index} className='flex justify-between -mt-2'>

              <div>
                <p>{item.name}</p>

              </div>

              <div>
                <p>₦{item.total}</p>
              </div>

            </div>

          ))
          }
          <div className='flex justify-between mt-10'>

            <div >
              <p>SubTotal</p>

            </div>
            <div>
            <p>₦{totalPrice}</p>
            </div>

          </div>
          <div className='flex justify-between -mt-4'>

            <div >
              <p>Delivery fee</p>

            </div>
            <div>
              <p>₦{delivery}</p>
            </div>

          </div>
          <hr className='-mt-1' />

          <div className='flex justify-between -mt-2'>
            <p>Total</p>
            <p>₦{totalPay}</p>
          </div>

          <div className='text-left'>
            <p>bank card</p>


          </div>
          <div className='flex justify-between'>
            <p>date/time</p>
            <p>{date}</p>
          </div>

          <h4>Payment Successful</h4>
          <p>thank you for Patronizing!!!</p>


        </div>
        <button><a href="http://localhost:5173/recieptpage" download>download</a></button>
      </div>
    </>
  )
}

export default RecieptPage