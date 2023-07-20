import loveWishlist from '../assets/love-wishlist.png'
import { Link, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import http from '../helpers/http.helper'
import moment from "moment"
import NavbarLogout from '../components/NavbarLogout'
import Dashboard from '../components/Dashboard'

const MyWishlist = ()=> {
    const {id} = useParams()
    const [histories, setHistories] = useState([])
    const [profile, setProfile] = useState({})
    const token = useSelector(state => state.auth.token)

    const handleClearHistories = async(id) => {
        await http(token).delete(`/wishlists/${id}`)
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
            const {data} = await http(token).get('/wishlists')
            setHistories(data.results)
        }
        getHistoryData()
    }, [token, histories, id])

    // useEffect(()=> {
    //     console.log(histories)
    // }, [histories])

    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <Dashboard />
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-lg:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">My Wishlist</h1>
            </div>
            <div className="flex h-[80%]">
                <div className="w-[80%] mt-10 ml-16 max-sm:ml-4">
                {histories.map(history => (
                    <div key={`wishlist-list-${history.id}`} className="flex mb-12">
                        <div className="grid content-start justify-items-center mr-8">
                            <p className="text-orange-500 font-medium">{moment(history.date).format('DD')}</p>
                            <p className="text-slate-400">{moment(history.date).format('dddd')}</p>
                        </div>
                        <div className="grid content-start">
                            <h1 className="font-bold text-2xl">{history.title}</h1>
                            <div className="mt-4">
                                <p className="text-slate-400 mb-1">{history.name}</p>
                                <p className="text-slate-400 mb-1">{moment(history.date).format('DD-MM-YYYY')}</p>
                            </div>
                        </div>
                        <button onClick={()=>handleClearHistories(history.id)} className='flex justify-end items-center w-full'>
                            <img src={loveWishlist} />
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
    )
}

export default MyWishlist