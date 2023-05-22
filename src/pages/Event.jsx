import loveWishlist from '../assets/love-wishlist.png'
import mappin from '../assets/map-pin.png'
import clock from '../assets/clock.png'
import org1 from '../assets/org1.png'
import org2 from '../assets/org2.png'
import org3 from '../assets/org3.png'
import org4 from '../assets/org4.png'
import peta from '../assets/peta.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import moment from "moment"
import { useParams, useNavigate } from 'react-router-dom'
import http from '../helpers/http.helper'
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"

const Event = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const [setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    useEffect(()=> {
        const getEventData = async(id) => {
            const {data} = await http().get(`/events/${id}`)
            setEvent(data.results)
        }
        if(id){
            getEventData(id)
        }
    }, [id])

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
    return (
        <>
        <NavbarLogout />
        <main className="flex max-md:grid w-[80%] max-md:w-full ml-[10%] max-md:ml-0 bg-white mt-10 rounded-3xl">
        <div className="ml-[5%] mt-20">
            {event?.picture && <img className="w-[350px] h-[440px] object-cover rounded-2xl brightness-75" src={event.picture.startsWith('https')?event.picture : `http://localhost:8888/uploads/${event.picture}`} />}
            <div className="flex justify-center items-center h-[70px] max-md:justify-start">
                <img src={loveWishlist} />
                <h1 className="ml-4 font-semibold">Add to Wishlist</h1>
            </div>
        </div>
        <div className="ml-[100px] max-sm:ml-0 w-[50%] max-sm:w-full mt-14">
            <div>
                <h1 className="w-[200px] font-bold text-2xl">{event?.title}</h1>
            </div>
            <div className="flex justify-between mt-12">
                <div className="flex items-center">
                    <img src={mappin} />
                    <h1 className="ml-2">{event?.location}</h1>
                </div>
                <div className="flex items-center">
                    <img src={clock} />
                    <h1 className="ml-3">{moment(event?.date).format('DD-MM-YYYY')}</h1>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="mb-2">Attendees</h1>
                <div className="flex">
                    <img src={org1} />
                    <img src={org2} />
                    <img src={org3} />
                    <img src={org4} />
                </div>
            </div>
            <div className="mt-10">
                <h1 className="font-bold text-2xl">Event Detail</h1>
                <p className="text-slate-400 text-sm mt-3">{event?.descriptions}</p>
                <p className="text-blue-500 font-semibold mt-3">Read More</p>
            </div>
            <div className="mt-[30px]">
                <h1 className="font-bold text-xl mb-4">LOCATION</h1>
                <img src={peta} />
            </div>
            <div className="flex justify-center items-center text-white w-[50%] max-md:w-full h-[45px] mt-10 rounded-xl mb-16">
                <Link to={`/tickets/${id}`} className="btn btn-primary w-full font-semibold tracking-wider">Buy Tickets</Link>
            </div>
        </div>
    </main>
    <Footer /></>
    )
}

export default Event