import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import { Link } from "react-router-dom"
import { useState } from 'react'
import http from '../helpers/http.helper'
import {FiEye, FiEyeOff} from 'react-icons/fi'

const Register = ()=> {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword((prevState) => !prevState)
    }

    const doRegister = async (event) => {
        try{
            event.preventDefault()
            const {value: fullName} = event.target.fullName
            const {value: email} = event.target.email
            const {value: password} = event.target.password
            const {value: confirmPassword} = event.target.confirmPassword
            setSuccessMessage('')

            
            if(!fullName || fullName.length < 6){
                setErrorMessage('FullName must be at least 6 characters long')
                return
            }
            if(!email || !email.includes('@')){
                setErrorMessage('Invalid email')
                return
            }
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
            if (!password || !passwordRegex.test(password)) {
                setErrorMessage('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol')
                return
            }
            if (password !== confirmPassword) {
                setErrorMessage('Password and Confirm Password do not match')
                return
            }
            const body = new URLSearchParams({fullName, email, password, confirmPassword}).toString()
            const {data} = await http().post('http://localhost:8888/auth/register', body)
            setSuccessMessage(data.message)
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
        <section className="bg-blue-500 w-[50%] max-md:hidden">
            <img src={male} className="relative left-[55%] top-[300px]" />
            <img src={female} className="relative left-[5%] top-[-90px]" />
        </section>
        <section className="bg-white w-[50%] max-md:w-full">
            <div className="w-[70%] h-[80vh] mx-[15%]">
                <div className="w-full relative top-[50px] flex">
                    <img src={Fill} />
                    <img src={Wetick} className="w-[94px] h-[36px] top-[20px] relative" />
                </div>
                <div className="w-full relative top-[80px]">
                    <h1 className="text-3xl mb-[15px]">Sign Up</h1>
                    <h1 className="max-md:w-[250px]">Already have an account? <Link className="text-blue-500" to="/login">Log In</Link></h1>
                    {errorMessage && (
                    <div>
                        <h1 className="alert alert-error mt-4 w-[330px]">{errorMessage}</h1>
                    </div>
                    )}
                    {successMessage && (
                    <div>
                        <h1 className="alert alert-success mt-4 w-[330px]">{successMessage}</h1>
                    </div>
                    )}
                </div>
                <div>
                    <form onSubmit={doRegister}>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs relative top-[110px]" name='fullName'/>
                        {/* <input type="text" placeholder="Full Name" className="w-[315px] h-[45px] bg-white border rounded-[15px] relative top-[110px] pl-[25px] tracking-wide" /> */}
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs relative top-[125px]" name='email'/>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered w-full max-w-xs relative top-[140px]" name='password'/>
                        <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" className="input input-bordered w-full max-w-xs relative top-[155px]" name='confirmPassword'/>
                        <div className='relative top-[55px] left-[270px]' onClick={handleTogglePassword}>
                        {showPassword ? <FiEyeOff size={30}/> : <FiEye size={30}/>}
                        </div>
                        <div className='relative top-[85px] left-[270px]' onClick={handleToggleConfirmPassword}>
                        {showConfirmPassword ? <FiEyeOff size={30}/> : <FiEye size={30}/>}
                        </div>
                        <button type='submit' className="btn btn-primary w-[315px] relative top-[150px]">Sign Up</button>
                    </form>
                    <div className="relative top-[60px] flex">
                        <input type="checkbox" />
                        <h5 className="ml-[15px] tracking-wide">Accept terms and condition</h5>
                    </div>
                    {/* <button className="w-[315px] h-[45px] bg-blue-500 rounded-[15px] relative top-[185px] text-white text-lg tracking-wider">Sign Up</button> */}
                </div>
            </div>
        </section>
    </main>
    )
}

export default Register