import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import http from '../helpers/http.helper'
import { useState } from 'react'

const CodeForgotPassword = ()=> {
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
            }
        }catch(err){
            console.log(err.response.data.message)
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
                    <h1 className="text-3xl mb-[15px] font-medium tracking-wide">Reset Password</h1>
                    <h1 className="max-sm:w-[250px] tracking-wide text-sm">Enter the code that was sent</h1>
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
                    <form onSubmit={doForgotPassword} className='gap-3 grid'>
                        <input type="number" placeholder="Code" className="input input-bordered w-full max-w-xs relative top-[105px]" name='code' />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs relative top-[105px]" name='email' />
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs relative top-[105px]" name='password' />
                        <input type="password" placeholder="ConfirmPassword" className="input input-bordered w-full max-w-xs relative top-[105px]" name='confirmPassword' />
                        <button className="btn btn-primary w-full max-w-xs relative top-[135px]">Send</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    )
}

export default CodeForgotPassword