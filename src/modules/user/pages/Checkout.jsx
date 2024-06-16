import React, { useEffect, useState, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import DashNav from '../layout/DashNav'
import { CartContext } from '../../context/CartContext'
import Footer from '../layout/Footer'
import Success from '../layout/Success'
import Progressbar from '../layout/Progressbar';


function Checkout() {
    const { cart, setCart } = useContext(CartContext)
    const [disable, setDisable] = useState(true)
    const [isloading, setIsloading] = useState(false)
    const [paySuccess, setPaysuccess] = useState(false)
    const [iTvalid, setItValid] = useState()
    const navigate = useNavigate()


    const valid = 'is-valid'
    const notValid = ''
    const reducer = (state, action) => {

        switch (action.type) {
            case 'CARDHOLDER':
                return { ...state, fullname: action.payload };

            case "CARDNUMBER":
                return { ...state, CardNumber: action.payload };

            case "EXPMONTH":
                return { ...state, ExpMonth: action.payload };

            case "EXPYEAR":
                return { ...state, ExpYear: action.payload };

            case "CVV":
                return { ...state, cvv: action.payload };
            case "RESET":
                return { ...state, fullname: '', CardNumber: '', ExpMonth: '', ExpYear: '', cvv: '' };
            default:
                throw new Error("invalid")


        }
    }

    const [state, dispatch] = useReducer(reducer, { fullname: '', CardNumber: '', ExpMonth: '', ExpYear: '', cvv: '' })

    const timeOut = () => {
        setTimeout(() => {
            navigate('/recieptpage');
        }, 4000)
    }

    const timeOut1 = () => {
        setTimeout(() => {
            setIsloading(false)
        }, 2000)
    }

    const submitBtn = (e) => {
        e.preventDefault();
        setIsloading(true);
        timeOut1();
        setPaysuccess(true);
        timeOut();


    };






    useEffect(() => {
        if (state.cvv.length === 3 && state.CardNumber.length <= 16 && state.ExpYear.length === 4) {
            setDisable(false)
            setItValid(valid)

        }
        else {
            setDisable(true)
            setItValid(notValid)

        }


    }, [state, iTvalid])


    return (
        <>
            <DashNav />
            {isloading ? <Progressbar /> : ''}
            {paySuccess ? <Success /> : ''}

            <div className='h-auto pb-20 text-center italic '>
                <h1 className='-mt-8'>CheckOut</h1>
                <form  className='flex flex-column items-center gap-2' action="">


                    <div className='mb-2' style={{ fontSize: '2rem' }}>
                        <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>&nbsp;&nbsp;
                        <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>&nbsp;&nbsp;
                        <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>&nbsp;&nbsp;
                        <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                    </div>
                    <div className="form-floating col-md-4">
                        <input type="text" className={`form-control h-10`} id="name" placeholder="Fullna"
                            onChange={(e) => dispatch({ type: "CARDHOLDER", payload: e.target.value })} />
                        <label htmlFor="name">Fullname</label>
                    </div>
                    <div className="form-floating  col-md-4 ">
                        <input type="number" className={`form-control ${iTvalid}`} id="cardnumber" placeholder="Card number"
                            onChange={(e) => dispatch({ type: "CARDNUMBER", payload: e.target.value })} />
                        <label htmlFor="cardnumber">Card number</label>
                    </div>
                    <div className="form-floating  col-md-4 ">
                        <input type="text" className={`form-control ${iTvalid} `} id="expmonth" placeholder="exp-month"
                            onChange={(e) => dispatch({ type: "EXPMONTH", payload: e.target.value })} />
                        <label htmlFor="expmonth">Exp-month</label>
                    </div>
                    <div className="form-floating  col-md-4 ">
                        <input type="number" className={`form-control ${iTvalid}`} id="expyear" placeholder="Exp-year"
                            onChange={(e) => dispatch({ type: "EXPYEAR", payload: e.target.value })} />
                        <label htmlFor="expyear">Exp-year</label>
                    </div>
                    <div className="form-floating  col-md-4 ">
                        <input type="number" className={`form-control ${iTvalid}`} id="cvv" placeholder="Cvv"
                            onChange={(e) => dispatch({ type: "CVV", payload: e.target.value })} />
                        <label htmlFor="cvv">Cvv</label>
                    </div>
                    <div className="d-grid  col-md-4 ">
                        <button onClick={submitBtn} disabled={disable} className="btn btn-primary" type="button">Pay</button>

                    </div>


                </form >
            </div >

            <Footer />
        </>
    )
}

export default Checkout