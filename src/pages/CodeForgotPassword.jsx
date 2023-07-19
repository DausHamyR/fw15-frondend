import http from '../helpers/http.helper'
import { useState } from 'react'
import logo from '../assets/logo_kelinci.png'
import orang from '../assets/2orang.png'
import { useNavigate } from 'react-router-dom'

const CodeForgotPassword = ()=> {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const doForgotPassword = async (event) => {
        setErrorMessage('')
        try{
            event.preventDefault()
            const {value: code} = event.target.code
            const {value: email} = event.target.email
            const {value: password} = event.target.password
            const {value: confirmPassword} = event.target.confirmPassword
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
            if (!password || !passwordRegex.test(password)) {
                setErrorMessage('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol')
                return
            }
            if (password !== confirmPassword) {
                setErrorMessage('Password and Confirm Password do not match')
                return
            }

            const body = new URLSearchParams({code, email, password, confirmPassword}).toString()
            const {data} = await http().post('/auth/resetPassword', body)
            if(data){
                setSuccessMessage("Success, password has been reset")
                navigate('/login')
            }
        }catch(err){
            console.log(err)
            const message = err.response.data.message
            if(message === 'the code entered is incorrect'){
                setErrorMessage(message)
            }
            if(message === "wrong email"){
                setErrorMessage(message)
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
            <form onSubmit={doForgotPassword} className='w-[70%] h-[80vh]'>
                <div className='flex items-center'>
                    <img src={logo} className='w-24 h-24'/>
                    <div className='text-xl text-[#FF8551] font-bold'>Cruelty Free</div>
                </div>
                <div>
                    <div className='text-2xl font-bold mb-2'>Reset Password</div>
                    <div className='font-semibold'>Enter the code that was sent</div>
                </div>
                {errorMessage && 
                    (<div>
                        <h1 className="alert alert-error mt-4 w-[330px]">{errorMessage}</h1>
                    </div>)}
                {successMessage && 
                    (<div>
                        <h1 className="alert alert-success mt-4 w-[330px]">{successMessage}</h1>
                    </div>)}
                <div className='my-8 grid gap-2'>
                    <input name='code' type="text" placeholder='Code Forgot Password' className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder='Email' className="input input-bordered w-full" />
                    <input name='password' type="password" placeholder='Password' className="input input-bordered w-full" />
                    <input name='confirmPassword' type="password" placeholder='Confirm Password' className="input input-bordered w-full" />
                </div>
                <button type='submit' className='bg-[#FF8551] rounded-md h-10 flex justify-center items-center w-full'>
                    <div className='text-white font-bold text-md'>Confirm</div>
                </button>
            </form>
        </div>
    </div>
    )
}

export default CodeForgotPassword