import logo from '../assets/logo_kelinci.png'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import http from '../helpers/http.helper'
import { logout as logoutAction } from "../redux/reducers/auth"
import {FiMenu} from 'react-icons/fi'

const NavbarLogout = ()=> {
    const [profile, setProfile] = useState({})
    const [menu, setMenu] = useState(false)
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token, menu])

    // useEffect(() => {
    //     console.log(profile)
    // }, [profile])

    const doLogout = ()=> {
        window.localStorage.removeItem('token')
        dispatch(logoutAction())
        navigate('/login')
    }

    const menuHamburger = ()=> {
        setMenu(prev=> !prev)
    }

    return (
        <>
            <div className='flex justify-between items-center mx-8'>
                <div className='flex items-center'>
                    <img src={logo} className='w-24 h-24'/>
                    <div className='text-xl text-[#FF8551] font-bold'>Cruelty Free</div>
                </div>
                <div className='flex gap-6 font-semibold max-md:hidden'>
                    <Link to='/' className='text-[#FF8551]'>Home</Link>
                    <Link to='/create-event'>Create Event</Link>
                    <button>Location</button>
                </div>
                {token ?
                (<div className='flex gap-6 max-md:hidden items-center'>
                    <Link to='/profile' className='flex items-center gap-2'>
                        <div className='w-16 h-16'>
                            <img src={profile.picture} className='w-full h-full rounded-full object-cover' />
                        </div>
                        <div className='font-semibold'>{profile.fullName}</div>
                    </Link>
                    <button onClick={doLogout} className='w-24 h-12 bg-red-500 rounded-xl'>
                        <div className='text-white font-semibold'>Logout</div>
                    </button>
                </div>) :
                (<div className='flex gap-6 max-md:hidden'>
                    <Link to='/login' className='w-24 h-12 bg-[#FF8551] rounded-xl flex justify-center items-center'>
                        <div className='text-white font-semibold'>Log In</div>
                    </Link>
                    <Link to='/register' className='w-24 h-12 bg-blue-500 rounded-xl flex justify-center items-center'>
                        <div className='text-white font-semibold'>Sign Up</div>
                    </Link>
                </div>)
                }
                <button onClick={()=> menuHamburger()} className='md:hidden'>
                    <FiMenu size={30} />
                </button>
            </div>
            {menu && token &&
            <>
                <div className='w-full h-[100px] flex flex-col justify-center items-center gap-2 text-black font-bold'>
                    <Link to='/' className='hover:text-blue-500'>Home</Link>
                    <Link to='/create-event' className='hover:text-blue-500'>Create Event</Link>
                    <div className='hover:text-blue-500'>Location</div>
                </div>
                <div className='flex gap-6 justify-center my-4'>
                    <Link to='/profile' className='flex items-center gap-2'>
                        <div className='w-16 h-16'>
                            <img src={profile.picture} className='w-full h-full rounded-full object-cover' />
                        </div>
                        <div className='font-semibold'>{profile.fullName}</div>
                    </Link>
                    <button onClick={doLogout} className='w-24 h-12 bg-red-500 rounded-xl'>
                        <div className='text-white font-semibold'>Logout</div>
                    </button>
                </div>
            </>
            }
            {menu && !token &&
            <>
                <div className='w-full h-[100px] flex flex-col justify-center items-center gap-2 text-black font-bold'>
                    <Link to='/' className='hover:text-blue-500'>Home</Link>
                    <Link to='/create-event' className='hover:text-blue-500'>Create Event</Link>
                    <div className='hover:text-blue-500'>Location</div>
                </div>
                <div className='flex gap-6 justify-center my-4'>
                    <Link to='/login' className='w-24 h-12 bg-[#FF8551] rounded-xl flex justify-center items-center'>
                        <div className='text-white font-semibold'>Log In</div>
                    </Link>
                    <Link to='/register' className='w-24 h-12 bg-blue-500 rounded-xl flex justify-center items-center'>
                        <div className='text-white font-semibold'>Sign Up</div>
                    </Link>
                </div>
            </>
            }
        </>
    )
}

export default NavbarLogout