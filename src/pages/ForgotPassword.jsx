import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import http from '../helpers/http.helper'
import { useState } from 'react'

const ForgotPassword = ()=> {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const doForgotPassword = async (event) => {
        try{
            event.preventDefault()
            const {value: email} = event.target.email
            const body = new URLSearchParams({email}).toString()
            const {data} = await http().post('http://localhost:8888/auth/forgotPassword', body)
            if(data){
                setSuccessMessage("Success, the code was sent to the email")
            }
            setErrorMessage('')
        }catch(err){
            const message = err?.response?.data?.message
            if(message){
                setErrorMessage(message)
            }
            setSuccessMessage('')
        }
    }
    return (
        <main className="container mx-auto flex h-[100vh]">
        <section className="bg-blue-500 w-[50%] max-sm:hidden">
            <img src={male} className="relative left-[55%] top-[300px]" />
            <img src={female} className="relative left-[5%] top-[-90px]" />
        </section>
        <section className="bg-white w-[50%] max-sm:w-full">
            <div className="w-[70%] h-[80vh] my-[80px] mx-[15%]">
                <div className="w-full relative top-[50px] flex">
                    <img src={Fill} />
                    <img src={Wetick} className="w-[94px] h-[36px] top-[20px] relative" />
                </div>
                <div className="w-full relative top-[80px]">
                    <h1 className="text-3xl mb-[15px] font-medium tracking-wide">Forgot Password</h1>
                    <h1 className="max-sm:w-[250px] tracking-wide text-sm">You’ll get mail soon on your email</h1>
                    {errorMessage && 
                    (<div>
                        <h1 className="alert alert-error mt-4 w-[330px]">{errorMessage}</h1>
                    </div>)}
                    {successMessage && 
                    (<div>
                        <h1 className="alert alert-success mt-4 w-[330px]">{successMessage}</h1>
                    </div>)}
                </div>
                <div>
                    <form onSubmit={doForgotPassword}>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs relative top-[125px]" name='email' />
                        <button className="btn btn-primary w-full max-w-xs relative top-[155px]">Send</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    )
}

export default ForgotPassword