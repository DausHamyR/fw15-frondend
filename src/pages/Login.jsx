import { Link } from "react-router-dom"
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import male from '../assets/male.png'
import female from '../assets/female.png'
// import Fill from '../assets/Fill 1.png'
// import Wetick from '../assets/Wetick.png'
import { useNavigate, } from "react-router-dom"
import { useEffect, useState } from "react"
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { asyncLoginAction } from "../redux/actions/auth.action"
import { Formik } from "formik"
import * as Yup from 'yup'
import propTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../redux/reducers/auth"
import logo from '../assets/logo_kelinci.png'
import orang from '../assets/2orang.png'
import btnFacebook from '../assets/btnFacebook.png'
import btnGoogle from '../assets/btnGoogle.png'

const validationSchema = Yup.object({
    email: Yup.string().required().email('Email is invalid'),
    password: Yup.string().required('Password is invalid')
})

const Login = ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => {
    // const dispatch = useDispatch()
    // const token = useSelector(state => state.auth.token)
    // const formError = useSelector(state => state.auth.formError)
    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    
    // const handleInputChange = () => {
    //     if (errorMessage !== '') {
    //         setErrorMessage('')
    //     }
    // }
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
                        <div className='text-2xl font-bold mb-2'>Sign In</div>
                        <div className='font-semibold'>Hi, Welcome back to Urticket!</div>
                    </div>
                    <div className='my-8 grid gap-2'>
                        <input name='email' type="text" placeholder='Email' className="input input-bordered w-full" />
                        <input name='password' type="password" placeholder='Password' className="input input-bordered w-full" />
                    </div>
                    <div className='flex gap-4 justify-end h-6 mb-4'>
                        <Link to='/forgot-password' className='font-semibold text-[#FF8551]'>Forgot Password</Link>
                    </div>
                    <div className='bg-[#FF8551] rounded-md h-10 flex justify-center items-center'>
                        <button className='text-white font-bold text-md'>Sign In</button>
                    </div>
                    <div className="grid justify-items-center mt-12 gap-4">
                        <div>or sign in with</div>
                        <div className="flex gap-6">
                            <img src={btnFacebook} />
                            <img src={btnGoogle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
