import logo from '../assets/logo_kelinci.png'
import menuHamburger from '../assets/menu-hamburger.png'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import http from '../helpers/http.helper'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [profile, setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])
    return (
        <header className="w-full flex justify-between items-center bg-white px-6">
        <div className="flex items-center">
            <img src={logo} className="w-16" />
        </div>
        <div className="max-md:hidden">
            <nav className="text-black">
                <Link className="mr-8" to='/home'>Home</Link>
                <Link className="mr-8" to='/create-event'>Create Event</Link>
                <Link className="" to='/event'>Location</Link>
            </nav>
        </div>
        <div className="flex items-center max-md:hidden">
            {profile?.picture && <img className='w-12 rounded-full border-2 border-blue-500 p-1' src={profile.picture.startsWith('https')?profile.picture : `http://localhost:8888/uploads/${profile.picture}`} />}
            <h1 className="text-black ml-4">{profile?.fullName}</h1>
        </div>
        <div className="md:hidden">
            <img src={menuHamburger} />
        </div>
    </header>
    )
}

export default Navbar