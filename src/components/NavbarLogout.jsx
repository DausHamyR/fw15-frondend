import logo from '../assets/logo_kelinci.png'
import menuHamburger from '../assets/menu-hamburger.png'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import http from '../helpers/http.helper'
import { logout as logoutAction } from "../redux/reducers/auth"

const NavbarLogout = ()=> {
    const location = useLocation()
    const [profile, setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const pathParts = location.pathname.split('/');
    const isEventLink = pathParts[1] === 'events';
    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])

    const doLogout = ()=> {
        window.localStorage.removeItem('token')
        dispatch(logoutAction())
        navigate('/login')
    }

    return (
        <header className="bg-white flex items-center justify-between flex-wrap px-4 w-full z-50">
            <section className="flex items-center flex-[1.3] max-md:flex-[2.5]">
                <img src={logo} className="w-16" />
                <h1 className="text-4xl font-bold">Cruelty Free</h1>
            </section>
            <section className="sm:hidden menu-toggle-hamburger">
                <img src={menuHamburger} className="header-menu" />
            </section>
            <div id="menu-toggle-active" className="w-full max-sm:hidden block flex-grow sm:flex sm:items-center sm:w-auto">
                <nav className="text-sm sm:flex-grow">
                        <Link to='/home' className={`w-[70px] block mt-4 sm:inline-block ${location.pathname === '/home' ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mt-[0]`}>Home</Link>
                        <Link to="/create-event" className={`w-[104px] block mt-4 sm:inline-block ${location.pathname.startsWith('/create-event') ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mt-[0]`}>Create Event</Link>
                        <Link to="/events" className={`w-[0] block mt-4 sm:inline-block ${isEventLink ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mt-[0]`}>Location</Link>
                </nav>
                {token ? 
                <div className="flex items-center">
                    <Link to={'/profile'} className="text-black mr-4 flex items-center">
                        {profile?.picture && <img src={profile.picture.startsWith('https')?profile.picture : `http://localhost:8888/uploads/${profile.picture}`} className='w-12 rounded-full border-2 border-blue-500 p-1 mr-2' />}
                        {profile.fullName}
                    </Link>
                    <button onClick={doLogout} className="btn btn-error w-[100px]">Logout</button>
                </div> :
                <section>
                    <Link to='/login' className="btn btn-active btn-primary w-[100px] mr-4">Log in</Link>
                    <Link to='/register' className="btn btn-active btn-ghost w-[100px]">Sign Up</Link>
                </section>
                }
            </div>
        </header>
    )
}

export default NavbarLogout