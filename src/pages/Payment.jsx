import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import menuHamburger from '../assets/menu-hamburger.png'
import Ellipse7 from '../assets/Ellipse 7.png'
import Ellipse8 from '../assets/Ellipse 8.png'
import cardBiru from '../assets/card-biru.png'
import chip from '../assets/chip.png'
import logosMastercard from '../assets/logos_mastercard.png'
import bintang from '../assets/bintang.png'
import Group822 from '../assets/Group 822.png'
import ok from '../assets/ok.png'
import Vectorkuning from '../assets/Vector (1)-kuning.png'
import Vectordolar from '../assets/Vector (3)-dolar.png'
import panahbawah from '../assets/panah bawah.png'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import http from '../helpers/http.helper'
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import Footer from "../components/Footer"

const Payment = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = useState({})
    const {state} = useLocation()
    const [method, setMethod] = useState([])
    const [selectedPayment, setSelectedPayment] = useState(null)

    useEffect(()=> {
        const getPaymentMethod = async() => {
            const {data} = await http(token).get('/payment')
            setMethod(data.results)
            setSelectedPayment(data.results[0].id)
        }
        getPaymentMethod()
    }, [token, navigate, state])

    useEffect(()=> {

    }, [])

    useEffect(()=> {
        async function getProfileData(){
            const fallback = (message)=> {
                dispatch(logoutAction())
                dispatch(setWarningMessage(message))
                navigate('/login')
            }
            const {data} = await http(token, fallback).get('/profile')
            setProfile(data.results)
        }
        if(token){
            getProfileData()
        }
    }, [dispatch, navigate, token])

    const doLogout = ()=> {
        window.localStorage.removeItem('token')
        dispatch(logoutAction())
        navigate('/login')
    }

    const doPayment = async (e) => {
        e.preventDefault()
        const {reservationId} = state
        const form = new URLSearchParams({
            reservationId,
            paymentMethodId: selectedPayment
        }).toString()
        const {data} = await http(token).post('/payment', form)
        navigate('/my-booking', {replace: true})
    }
    
    return (
        <>
        <header className="w-full flex justify-between items-center bg-white px-6">
        <div className="flex items-center">
            <img src={Fill} />
            <img src={Wetick} className="w-[89px] h-[36px]" />
        </div>
        <div className="max-md:hidden">
            <nav className="text-black">
                <Link className="mr-8" to='/home'>Home</Link>
                <Link className="mr-8" to='/create-event'>Create Event</Link>
                <Link className="" to='/event'>Location</Link>
            </nav>
        </div>
        {token ?
        <div className='flex gap-5'>
            <Link to={'/profile'} className="flex items-center max-md:hidden">
                {profile?.picture && <img className="w-12 rounded-full border-2 border-blue-500 p-1" src={profile.picture.startsWith('https')?profile.picture : `http://localhost:8888/uploads/${profile.picture}`} />}
                <h1 className="text-black ml-4">{profile.fullName}</h1>
            </Link>
            <button onClick={doLogout} className="btn btn-error w-[100px]">Logout</button>
        </div> :
        <section>
            <Link to='/login' className="btn btn-active btn-primary w-[100px] mr-4">Log in</Link>
            <Link to='/register' className="btn btn-active btn-ghost w-[100px]">Sign Up</Link>
        </section>
        }
        <div className="md:hidden">
            <img src={menuHamburger} />
        </div>
    </header>
    <form onSubmit={doPayment} className="flex max-md:grid w-[80%] max-md:w-full ml-[10%] max-md:ml-0 bg-white mt-10 rounded-3xl">
        <div className="ml-[5%] mr-[15%]">
            <div className="h-[120px] flex items-center text-2xl font-semibold">
                <h1>Payment Method</h1>
            </div>
            <div className="w-[30%] max-xl:w-full flex ml-[8%] mb-8">
                <div className="flex">
                    <img src={Ellipse8} className="w-[7px] h-[7px] self-center mr-4" />
                </div>
                {method.find(item => (
                <div key={`payment-method-${item.id}`} className="flex items-center">
                    <div onChange={(e)=> setSelectedPayment(e.target.value)} className="p-2 border-1 bg-slate-300 rounded-md">
                        <img src={cardBiru} className="w-[24px] h-[24px]" defaultChecked={item.id === method[0].id}/>
                    </div>
                    <h3 className="ml-4">{item[0].name}</h3>
                </div>
                ))}
            </div>
            <div className="flex items-center">
                <div className="w-[285px] h-[173px] bg-amber-500 ml-[10%] max-xl:ml-0 rounded-xl">
                    <div className="flex justify-between py-4 px-6">
                        <img src={chip} />
                        <img src={logosMastercard} />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <img src={bintang} className="mr-6" />
                        <img src={bintang} className="mr-6" />
                        <img src={bintang} className="mr-6" />
                        <h2 className="text-white font-bold tracking-widest">1424</h2>
                    </div>
                    <div className="flex justify-around items-center mt-6">
                        <h2 className="text-white tracking-wider text-sm">Jhon Tomson</h2>
                        <h2 className="text-white tracking-wider text-sm">Exp. 24 / 03</h2>
                    </div>
                </div>
                <div>
                    <img src={Group822} />
                </div>
            </div>
            <div className="flex ml-[8%] mt-10 pb-16">
                {method.find(item => (
                <div key={`payment-method1-${item.id}`} className="grid content-between h-[200px] mr-28">
                    <div className="flex items-center">
                        <img src={Ellipse7} className="w-[15px] h-[15px] mr-4" />
                        <div className="p-2 bg-red-200 rounded-md mr-4">
                            <img src={ok} className="w-[20px] h-[19px]" />
                        </div>
                        <h1 className="font-semibold tracking-wider">{item[1].name}</h1>
                    </div>
                    <div className="flex items-center">
                        <img src={Ellipse7} className="w-[15px] h-[15px] mr-4" />
                        <div className="p-2 bg-orange-200 rounded-md mr-4">
                            <img src={Vectorkuning} className="w-[20px] h-[19px]" />
                        </div>
                        <h1 className="font-semibold tracking-wider">{item[2].name}</h1>
                    </div>
                    <div className="flex items-center">
                        <img src={Ellipse7} className="w-[15px] h-[15px] mr-4" />
                        <div className="px-3 py-2 bg-blue-200 rounded-md mr-4">
                            <img src={Vectordolar} className="w-[10px] h-[18px]" />
                        </div>
                        <h1 className="font-semibold tracking-wider">{item[3].name}</h1>
                    </div>
                </div>
                ))}
                <div className="grid mt-3 h-[175px] content-between">
                    <img src={panahbawah} />
                    <img src={panahbawah} />
                    <img src={panahbawah} />
                </div>
            </div>
        </div>
        <div className="w-[40%] max-md:ml-8 max-md:w-[90%] mt-10">
            <h1 className="font-bold text-2xl tracking-wider mb-12">Ticket Detail</h1>
            <div className="grid content-between h-[180px] mb-12">
                <div className="flex justify-between">
                    <h1 className="font-semibold">Event</h1>
                    <h1 className="text-blue-500">{state.eventName}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Ticket Section</h1>
                    <h1 className="text-blue-500">{state.sectionName}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Quantity</h1>
                    <h1 className="text-blue-500">{state.quantity}</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Total Payment</h1>
                    <h1 className="text-blue-500">${state.totalPayment}</h1>
                </div>
            </div>
            <div className="w-full h-[55px] flex justify-center items-center rounded-2xl">
                <button type='submit' className="btn btn-primary w-full text-white text-xl font-normal">Payment</button>
            </div>
        </div>
    </form>
    <Footer />
        </>
    )
}

export default Payment