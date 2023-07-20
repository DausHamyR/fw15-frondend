import Footer from "../components/Footer"
import { useState, useEffect } from 'react'
import http from '../helpers/http.helper'
import { useSelector } from 'react-redux'
import NavbarLogout from '../components/NavbarLogout'
import Dashboard from '../components/Dashboard'

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
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <Dashboard />
        <section className="w-[70%] min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-lg:w-full">
            <div className="w-[30%] max-lg:w-[50%] h-[80px] flex justify-center items-center text-2xl font-semibold">
                <h1>Change Password</h1>
            </div>
            <form onSubmit={doChangePassword} className="w-[80%] max-sm:w-[95%] grid h-[400px] ml-16 max-sm:ml-4">
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