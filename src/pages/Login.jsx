import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { asyncLoginAction } from "../redux/actions/auth.action"
import { Formik } from "formik"
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../redux/reducers/auth"
import logo from '../assets/logo_kelinci.png'
import orang from '../assets/2orang.png'
import btnFacebook from '../assets/btnFacebook.png'
import btnGoogle from '../assets/btnGoogle.png'

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Password cannot be empty'),
});

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if(token){
            navigate('/')
        }
    }, [token, navigate])

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const btnLogin = async (values, {setSubmitting}) => {
        dispatch(clearMessage())
        dispatch(asyncLoginAction(values))
        setSubmitting(false)
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
                        <div className='text-2xl font-bold mb-2'>Sign In</div>
                        <div className='font-semibold'>Hi, Welcome back to Urticket!</div>
                    </div>
                    {errorMessage && (
                    <div>
                        <h1 className="alert alert-error mt-4 w-[330px]">{errorMessage}</h1>
                    </div>
                    )}
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={btnLogin}
                        validationSchema={validationSchema}
                        enableReinitialize
                    >
                    {({handleSubmit, handleChange, handleBlur, values, errors, touched})=> (
                    <form onSubmit={handleSubmit}>
                        <div className='my-8 grid gap-2'>
                            <input name='email' type="text" placeholder='Email' className={`input input-bordered ${errors.email && touched.email && 'input-error'} w-full`} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            {errors.email && touched.email && (
                                <label className="label">
                                    <span className='label-text-alt text-error'>{errors.email}</span>
                                </label>
                            )}
                            <div className="flex items-center">
                                <input name='password' type={showPassword ? 'text' : 'password'} placeholder='Password' className={`input input-bordered ${errors.password && touched.password && 'input-error'} w-full`} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                <div onClick={handleTogglePassword} className='absolute right-28 max-lg:right-20 max-md:right-16 max-sm:right-28'>
                                    {showPassword ? <FiEyeOff size={30}/> : <FiEye size={30}/>}
                                </div>
                            </div>
                            {errors.password && touched.password && (
                                <label className="label">
                                    <span className='label-text-alt text-error'>{errors.password}</span>
                                </label>
                            )}
                        </div>
                        <div className='flex gap-4 justify-end h-6 mb-4'>
                            <Link to='/forgot-password' className='font-semibold text-[#FF8551]'>Forgot Password</Link>
                        </div>
                        <button type="submit" className='bg-[#FF8551] rounded-md h-10 flex justify-center items-center w-full'>
                            <div className='text-white font-bold text-md'>Sign In</div>
                        </button>
                    </form>
                    )}
                    </Formik>
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
