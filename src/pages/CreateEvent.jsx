// import Avatar from '../assets/Avatar.png'
import coklat from '../assets/coklat.png'
import Vector from '../assets/Vector.png'
import tambahBiru from '../assets/tambah biru.png'
import Vector1 from '../assets/Vector (1).png'
import Vector4 from '../assets/Vector (4).png'
import Vector5 from '../assets/Vector (5).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import { Link } from "react-router-dom"
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import http from '../helpers/http.helper'
import moment from "moment"
import axios from 'axios'

const CreateEvent = ()=> {
    const [histories, setHistories] = useState([])
    const [profile, setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    const handleClearHistories = async() => {
        const data = await axios.delete('/history')
        console.log(data)
        setHistories([])
    }
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
        <Navbar />
    <main className="w-full flex max-sm:ml-[0]">
        <section className="w-[25%] min-h-[825px] mt-12 max-md:hidden">
            <div className="flex justify-center">
            {profile?.picture && <img className='w-12 rounded-full border-2 border-blue-500 p-1' src={profile.picture.startsWith('https')?profile.picture : `http://localhost:8888/uploads/${profile.picture}`} />}
                <div className="grid ml-4">
                    <h1 className="text-md tracking-wider font-medium">{profile?.fullName}</h1>
                    <p className="text-slate-400 text-sm tracking-wider">{profile?.profession}</p>
                </div>
            </div>
            <div className="w-[80%] h-[440px] mt-8 grid ml-[20%] content-between">
                <div className="flex items-center font-semibold">
                    <img src={Vector} className="w-[21px] h-[21px]" />
                    <h3 className="ml-6">Profile</h3>
                </div>
                <div className="flex items-center font-semibold ml-12">
                    <img src={Vector1} className="w-[20px] h-[16px]" />
                    <h3 className="ml-6">Card</h3>
                    <div className="relative left-[-85px] w-24 h-[1px] bg-black"></div>
                </div>
                <Link to='/profile' className="flex items-center font-semibold ml-12">
                    <img src={coklat} className="w-[18.75px] h-[18.75px]" />
                    <h3 className="ml-6">Edit Profile</h3>
                </Link>
                <Link to='/change-password' className="flex items-center font-semibold ml-12">
                    <img src={Vector4} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6">Change Password</h3>
                </Link>
                <Link to='/create-event' className="flex items-center font-semibold">
                    <img src={tambahBiru} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6 text-blue-500">Create Event</h3>
                </Link>
                <Link to='/my-booking' className="flex items-center font-semibold">
                    <img src={Vector5} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6">My Booking</h3>
                </Link>
                <Link to='/my-wishlist' className="flex items-center font-semibold">
                    <img src={Vector6} className="w-[20px] h-[18px]" />
                    <h3 className="ml-6">My Wishlist</h3>
                </Link>
                <div className="flex items-center font-semibold">
                    <img src={Vector7} className="w-[18.5px] h-[19px]" />
                    <h3 className="ml-6">Settings</h3>
                </div>
                <Logout />
            </div>
        </section>
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-md:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">Manage Event</h1>
                <div className="flex justify-center px-8 py-3 items-center bg-blue-100 rounded-md">
                    <p className="text-xs text-blue-500 font-bold tracking-wider">Create</p>
                </div>
            </div>
            <div className="w-[80%] grid content-between h-[80%] mt-10 ml-16 max-sm:ml-4">
                {histories.map(history => (
                <div key={`history-list-${history.id}`} className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">{moment(history.date).format('DD')}</p>
                        <p className="text-slate-400">{moment(history.date).format('dddd')}</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">{history.title}</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">{history.location}</p>
                            <p className="text-slate-400 mb-1">{moment(history.date).format('DD-MM-YYYY')}</p>
                            <div className="flex">
                                <label htmlFor={`my-modal-${history.id}`} className="cursor-pointer text-blue-600 font-semibold mr-4">Detail</label>
                                <input type="checkbox" id={`my-modal-${history.id}`} className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor={`my-modal-${history.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Detail Events!</h3>
                                <p className="py-2">{history.id}</p>
                                <p className="py-2">{history.title}</p>
                                <p className="py-2">{history.location}</p>
                                <p className="py-2">{moment(history.date).format('DD-MM-YYYY')}</p>
                            </div>
                            </div>
                                <button className="text-blue-600 font-semibold mr-4">Update</button>
                                <button onClick={handleClearHistories} className="text-blue-600 font-semibold">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                {/* <div className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    </main>
    <Footer />
    </>
    )
}

export default CreateEvent