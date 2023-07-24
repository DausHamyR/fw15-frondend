import mappin from '../assets/map-pin.png'
import clock from '../assets/clock.png'
import Group28 from '../assets/Group28.png'
import peta from '../assets/peta.png'
import { Link } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import moment from "moment"
import { useParams, useNavigate } from 'react-router-dom'
import http from '../helpers/http.helper'
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"
import {AiFillHeart} from 'react-icons/ai'

const Event = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const token = useSelector(state => state.auth.token)
    const [wishlist, setWishlist] = useState(false);

    useEffect(()=> {
        const getEventData = async(id) => {
            const {data} = await http(token).get(`/events/${id}`)
            setEvent(data.results)
        }
        if(id){
            getEventData(id)
        }
    }, [id, token])

    useEffect(()=> {
        async function getProfileData(){
            const fallback = (message)=> {
                dispatch(logoutAction())
                dispatch(setWarningMessage(message))
                navigate('/login')
            }
            await http(token, fallback).get('/profile')
        }
        if(token){
            getProfileData()
        }
    }, [dispatch, navigate, token])

    async function postWishlist(id) {
        try {
            if (wishlist) {
                await http(token).delete(`/wishlists/${id}`);
                setWishlist(false);
            } else {
                const body = new URLSearchParams({
                    eventId: id,
                }).toString();
                await http(token).post('/wishlists', body);
            setWishlist(true);
          }
        } catch (err) {
          console.log(err);
        }
      }

    useEffect(() => {
        getWishlist(id);
    }, []);

    const getWishlist = useCallback(
        async () => {
            try {
                const {data} = await http(token).get(`/wishlists/${id}`)
                setWishlist(!!data);
            } catch (err) {
            console.log(err);
            }
        },
        [token, id],
    );

    return (
    <>
        <NavbarLogout />
        <main className="flex gap-12 max-md:flex-col items-center w-[80%] max-lg:w-full ml-[10%] max-lg:ml-0">
            <div className="ml-[5%] mt-20">
                {event?.picture && <img className="w-[350px] h-[440px] object-cover rounded-2xl brightness-75" src={event.picture} />}
                <div className="flex justify-center items-center h-[70px] max-md:justify-start">
                    <button onClick={() => postWishlist(event.id)}>
                        <AiFillHeart size={40} className={wishlist ? 'text-red-500' : 'text-slate-200'}/>
                    </button>
                    <h1 className="ml-4 font-semibold">Add to Wishlist</h1>
                </div>
            </div>
            <div className="w-[55%] max-sm:w-[80%] max-sm:mx-8 mt-14 max-md:mt-0">
                <div>
                    <h1 className="w-full font-bold text-4xl">{event?.title}</h1>
                </div>
                <div className="flex justify-between mt-12">
                    <div className="flex items-center gap-2">
                        <img src={mappin} />
                        <h1 className='text-lg'>{event?.location}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={clock} />
                        <h1 className='text-lg'>{moment(event?.date).format('DD-MM-YYYY')}</h1>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="mb-2 text-xl font-semibold">Attendees</h1>
                    <img src={Group28} />
                </div>
                <div className="my-10 flex flex-col gap-4">
                    <h1 className="font-bold text-2xl">Event Detail</h1>
                    <p className="text-slate-400 text-sm">{event?.descriptions}</p>
                    <p className="text-blue-500 font-semibold">Read More</p>
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-4">LOCATION</h1>
                    <img src={peta} />
                </div>
                <div className="flex justify-center items-center text-white w-[50%] max-md:w-full h-[45px] mt-10 rounded-xl mb-16">
                    <Link to={`/tickets/${id}`} className="btn btn-primary w-full font-semibold tracking-wider">Buy Tickets</Link>
                </div>
            </div>
        </main>
    <Footer />
    </>
    )
}

export default Event