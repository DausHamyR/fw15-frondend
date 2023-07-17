import male from '../assets/male.png'
import female from '../assets/female.png'
import http from '../helpers/http.helper'
import { useState } from 'react'
import { useNavigate} from "react-router-dom"
import logo from '../assets/logo_kelinci.png'
import orang from '../assets/2orang.png'

const ForgotPassword = ()=> {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const doForgotPassword = async (event) => {
        setErrorMessage('')
        try{
            event.preventDefault()
            const {value: email} = event.target.email
            const body = new URLSearchParams({email}).toString()
            const {data} = await http().post('/auth/forgotPassword', body)
            if(data){
                setSuccessMessage("Success, the code was sent to the email")
                navigate('/code-forgot-password')
            }
        }catch(err){
            // const message = err?.response?.data?.message
            if(err){
                setErrorMessage('wrong email')
            }
            setSuccessMessage('')
        }
    }
    return (
        <div className='flex'>
        <div className='bg-[#FF8551] h-screen w-[60%] max-sm:hidden'>
            <div className='flex justify-center items-center h-screen'>
                <img src={orang} />
            </div>
        </div>
        <div className='bg-white w-[40%] flex justify-center items-center max-sm:w-full max-sm:h-screen'>
            <div className='w-[70%] h-[80vh]'>
                <div className='flex items-center'>
                    <img src={logo} className='w-24 h-24'/>
                    <div className='text-xl text-[#FF8551] font-bold'>Cruelty Free</div>
                </div>
                <div>
                    <div className='text-2xl font-bold mb-2'>Forgot Password</div>
                    <div className='font-semibold'>You’ll get mail soon on your email</div>
                </div>
                <div className='my-8 grid gap-2'>
                    <input name='email' type="text" placeholder='Email' className="input input-bordered w-full" />
                </div>
                <div className='bg-[#FF8551] rounded-md h-10 flex justify-center items-center'>
                    <button className='text-white font-bold text-md'>Send</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword