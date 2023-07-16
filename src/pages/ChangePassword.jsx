// import Avatar from '../assets/Avatar.png'
import kunciBiru from '../assets/kunci biru.png'
import coklat from '../assets/coklat.png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector (1).png'
import Vector5 from '../assets/Vector (5).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import { Link } from "react-router-dom"
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import { useState, useEffect } from 'react'
import http from '../helpers/http.helper'
import { useSelector } from 'react-redux'

const ChangePassword = ()=> {
    const [profile, setProfile] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const token = useSelector(state => state.auth.token)
    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])
    const doChangePassword = async (event) => {
        setErrorMessage('')
        try{
            event.preventDefault()
            const {value: oldPassword} = event.target.oldPassword
            const {value: newPassword} = event.target.newPassword
            const {value: confirmNewPassword} = event.target.confirmNewPassword
            if(newPassword !== confirmNewPassword){
                setErrorMessage('Password and Confirm Password do not match')
                return
            }
            const body = new URLSearchParams({oldPassword, newPassword, confirmNewPassword}).toString()
            const {data} = await http(token).patch('/changePassword', body)
            console.log(data)
            if(data){
                setSuccessMessage("Successfully changed password")
            }
        }catch(err){
            const message = err?.response?.data?.message
            const results = err?.response?.data?.results
            console.log(message)
            console.log(results)
            if(message === "Old password is incorrect."){
                setErrorMessage('Old password is incorrect.')
            }
            if(results[0].msg === "Password must be strong!"){
                setErrorMessage('Password must be strong!')
            }
            setSuccessMessage('')
        }
    }
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
                    <img src={kunciBiru} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6 text-blue-500">Change Password</h3>
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
            <div className="w-[30%] max-lg:w-[50%] h-[80px] flex justify-center items-center text-2xl font-semibold">
                <h1>Change Password</h1>
            </div>
            <form onSubmit={doChangePassword} className="w-[80%] grid h-[400px] ml-16 max-sm:ml-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-slate-400">Old Password</h1>
                    <input type="text" className="input input-bordered w-[70%] h-[45px] rounded-2xl border-2 border-slate-400 pl-6 tracking-wider" placeholder="Input Old Password ..." name='oldPassword' />
                </div>
                <div className="flex items-center justify-between">
                    <h1 className="text-slate-400">New Password</h1>
                    <input type="text" className="input input-bordered w-[70%] h-[45px] rounded-2xl border-2 border-slate-400 pl-6 tracking-wider" placeholder="Input New Password ..." name='newPassword'/>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className="text-slate-400">Confirm Password</h1>
                    <input type="text" className="input input-bordered w-[70%] h-[45px] rounded-2xl border-2 border-slate-400 pl-6 tracking-wider" placeholder="Input Confirm Password ..." name='confirmNewPassword'/>
                </div>
                <button className="btn btn-primary w-full h-[60px] text-xl mt-10">Update</button>
            </form>
        </section>
        {errorMessage &&
                (<div>
                    <h1 className="alert alert-error mt-4 w-[330px] relative right-[550px]">{errorMessage}</h1>
                </div>)}
                {successMessage && 
                    (<div>
                        <h1 className="alert alert-success mt-4 w-[330px] relative right-[550px]">{successMessage}</h1>
                    </div>)}
    </main>
    <Footer />
    </>
    )
}

export default ChangePassword