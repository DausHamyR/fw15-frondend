// import Avatar from '../assets/Avatar.png'
import coklat from '../assets/coklat.png'
import blue from '../assets/blue.png'
import calender from '../assets/calender.png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector (1).png'
import Vector4 from '../assets/Vector (4).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import http from '../helpers/http.helper'
import Footer from "../components/Footer"
import moment from "moment"
import NavbarLogout from '../components/NavbarLogout'
import Dashboard from '../components/Dashboard'

const MyBooking = ()=> {
    const [histories, setHistories] = useState([])
    const [profile, setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])

    useEffect(()=> {
        const getHistoryData = async() => {
            const {data} = await http(token).get('/history')
            setHistories(data.results)
        }
        getHistoryData()
    }, [token])

    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <Dashboard />
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-md:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">My Booking</h1>
                <div className="flex items-center bg-blue-100 px-4 py-2 rounded-md">
                    <img src={calender} className="w-[24px] h-[24px]" />
                    <p className="ml-2 text-xs text-blue-400 font-medium">March</p>
                </div>
            </div>
            <div className="w-[80%] grid content-start gap-12 h-[80%] mt-10 ml-16 max-sm:ml-4">
                {histories.map(history => (
                <div key={`history-listttt-${history?.id}`} className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">{moment(history?.date).format('DD')}</p>
                        <p className="text-slate-400">{moment(history?.date).format('dddd')}</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">{history?.title}</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">{history?.location}</p>
                            <p className="text-slate-400 mb-1">{moment(history?.date).format('DD-MM-YYYY')}</p>
                            <label htmlFor={`my-modal-${history?.id}`} className="cursor-pointer text-blue-500 no-underline">Detail</label>
                            <input type="checkbox" id={`my-modal-${history?.id}`} className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor={`my-modal-${history?.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">My Booking Details!</h3>
                                <p className="py-2">{history?.id}</p>
                                <p className="py-2">{history?.title}</p>
                                <p className="py-2">{history?.name}</p>
                                <p className="py-2">{history?.namePayment}</p>
                                <p className="py-2">{moment(history?.date).format('DD-MM-YYYY')}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </main>
    <Footer />
    </>
    )
}

export default MyBooking