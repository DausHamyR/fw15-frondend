import stadion from '../assets/stadion.png'
import sort from '../assets/sort.png'
import tiketBlue from '../assets/tiket-blue.png'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import http from '../helpers/http.helper'
import {FiPlus, FiMinus} from 'react-icons/fi'
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"

const Tickets = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ setProfile] = useState({})
    const [ setEvents] = useState({})
    const token = useSelector(state => state.auth.token)
    const {id:eventId} = useParams()
    const [sections, setSections] = useState([])
    const [filledSection, setFilledSection] = useState({
        id: 0,
        quantity: 0
    })

    const increment = (id) => {
        setFilledSection({
            id,
            quantity: filledSection.quantity + 1
        })
    }

    const decrement = (id) => {
        setFilledSection({
            id,
            quantity: filledSection.quantity - 1
        })
    }

    useEffect(()=> {
        const getSections = async() => {
            const {data} = await http(token).get('/section')
            setSections(data.results)
        }
        getSections()
    }, [token])

    const doReservation = async ()=> {
        const form = new URLSearchParams({
            eventId,
            sectionId: filledSection.id,
            quantity: filledSection.quantity
        }).toString()

        const {data} = await http(token).post('/reservation', form)
        
        navigate('/payment', {state: {
            eventId,
            eventName: data.results.events.title,
            reservationId: data.results.id,
            sectionName: data.results.sectionName,
            quantity: data.results.quantity,
            totalPayment: data.results.totalPrice
        },
        replace: true
    })
    }
    
    const selectedSection = filledSection && sections.filter(item => item.id === filledSection.id)[0]

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
    }, [dispatch, navigate, token, setProfile])
    
    useEffect(()=> {
        async function getEventsData(){
            const {data} = await http(token).get('/events')
            setEvents(data.results)
        }
        if(token){
            getEventsData()
        }
    }, [dispatch, navigate, token, setEvents])

    return (
        <>
        <NavbarLogout />
    <main className="flex max-md:grid w-[80%] max-md:w-full ml-[10%] max-md:ml-0 bg-white mt-10 rounded-3xl">
        <div className="ml-[5%]">
            <img src={stadion} />
        </div>
        <div className="w-[37.5%] max-md:ml-8 max-md:w-[90%] mt-10">
            <div className="grid">
                {sections.map(item => (
                <div key={`section-select-${item.id}`} className="mb-10">
                    <div className="flex justify-between mb-12">
                        <div>
                            <h1 className="font-bold text-xl">Tickets</h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-16 mr-4">By Price</h1>
                            <img src={sort} />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-md">
                                <img src={tiketBlue} />
                            </div>
                            <div className="ml-3">
                                <h1>{item.name}</h1>
                                <h1 className="text-slate-400 text-sm">12 Seats available</h1>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1>${item.price}</h1>
                            <h1 className="text-slate-400">per person</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="font-semibold">Quantity</h1>
                        <div>
                            <button className='btn btn-error' onClick={()=> decrement(item.id)}>
                                <FiMinus />
                            </button>
                            <div className='text-xl'>{item.id === filledSection.id ? filledSection.quantity: 0}</div>
                            <button className='btn btn-success' onClick={()=> increment(item.id)}>
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                </div>
                ))}
                {/* <div className="mb-10">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-2 bg-red-100 rounded-md">
                                <img src={tiketMerah} />
                            </div>
                            <div className="ml-3">
                                <h1>Section vip, Row 2</h1>
                                <h1 className="text-slate-400 text-sm">9 Seats available</h1>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1>$35</h1>
                            <h1 className="text-slate-400">per person</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="font-semibold">Quantity</h1>
                        <div>
                            <img src={minAndPlus} />
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-2 bg-orange-100 rounded-md">
                                <img src={tiketYellow} />
                            </div>
                            <div className="ml-3">
                                <h1>Section vvip, Row 3</h1>
                                <h1 className="text-slate-400 text-sm">6 Seats available</h1>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1>$50</h1>
                            <h1 className="text-slate-400">per person</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="font-semibold">Quantity</h1>
                        <div>
                            <img src={minAndPlus} />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="flex justify-between">
                <div className="grid content-between h-[100px] font-semibold">
                    <h1>Ticket Section</h1>
                    <h1>Quantity</h1>
                    <h1>Total Payment</h1>
                </div>
                <div className="grid content-between h-[100px] text-blue-500 font-semibold">
                    <h1>{selectedSection?.name || "-"}</h1>
                    <h1>{selectedSection?.quantity}</h1>
                    <h1>${(selectedSection?.price * filledSection?.quantity) || "0"}</h1>
                </div>
            </div>
            <div className="flex justify-center items-center text-white w-[70%] max-md:w-full h-[45px] mt-10 rounded-xl mb-16">
                <button onClick={doReservation} className="btn btn-primary w-full font-semibold">Checkout</button>
            </div>
        </div>
    </main>
    <Footer /></>
    )
}

export default Tickets