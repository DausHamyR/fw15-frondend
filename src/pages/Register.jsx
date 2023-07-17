
import { Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
import http from '../helpers/http.helper'
import { useSelector } from "react-redux"
import logo from '../assets/logo_kelinci.png'
import orang from '../assets/2orang.png'
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { Formik } from 'formik'
import * as Yup from 'yup';

const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Required Full Name')
      .min(4, 'FullName must be at least 4 characters long'),
    email: Yup.string().email('Invalid email address').required('Required Email'),
    password: Yup.string()
      .required('Password cannot be empty')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
        'Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol',
      ),
    confirmPassword: Yup.string()
      .required('Confirm Password cannot be empty')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

const Register = ()=> {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword((prevState) => !prevState)
    }

    const btnRegister = async values => {
        try {
            const body = new URLSearchParams({
                fullName: values.fullName,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword
            }).toString();
            const {data} = await http().post('/auth/register', body);
            console.log(data)
            navigate('/login')
            setErrorMessage('')
        } catch (err) {
            const message = err?.response?.data?.message
            console.log(message)
            if(message){
                setErrorMessage(message)
            }
        }
    };

    return (
        <div className='flex'>
            <div className='bg-[#FF8551] h-screen w-[60%] max-sm:hidden'>
                <div className='flex justify-center items-center h-screen'>
                    <img src={orang} />
                </div>
            </div>
            <div className='bg-white w-[40%] flex justify-center items-center max-sm:w-full max-sm:h-screen'>
                <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={btnRegister}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({handleSubmit, handleChange, handleBlur, values, errors, touched})=> (
                <form onSubmit={handleSubmit} className='w-[70%] h-[80vh]'>
                    <div className='flex items-center'>
                        <img src={logo} className='w-24 h-24'/>
                        <div className='text-xl text-[#FF8551] font-bold'>Cruelty Free</div>
                    </div>
                    <div>
                        <div className='text-2xl font-bold mb-2'>Sign Up</div>
                        <div className='font-semibold'>Already have an account? <Link to="/login" className='text-blue-700'>Log In</Link></div>
                    </div>
                    {errorMessage && (
                    <div>
                        <h1 className="alert alert-error mt-4 w-[330px]">{errorMessage}</h1>
                    </div>
                    )}
                    <div className='my-8 flex flex-col gap-2'>
                        <div>
                            <input name='fullName' type="text" placeholder='Full Name' className={`input input-bordered ${errors.fullName && touched.fullName && 'input-error'} w-full`} onChange={handleChange} onBlur={handleBlur} value={values.fullName}  />
                            {errors.fullName && touched.fullName && (
                                <label className="label">
                                    <span className='label-text-alt text-error'>{errors.fullName}</span>
                                </label>
                            )}
                        </div>
                        <div>
                            <input name='email' type="text" placeholder='Email' className={`input input-bordered ${errors.email && touched.email && 'input-error'} w-full`} onChange={handleChange} onBlur={handleBlur} value={values.email}  />
                            {errors.email && touched.email && (
                                <label className="label">
                                    <span className='label-text-alt text-error'>{errors.email}</span>
                                </label>
                            )}
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <input name='password' type={showPassword ? 'text' : 'password'} placeholder='Password' className={`input input-bordered ${errors.password && touched.password && 'input-error'} w-full`} onChange={handleChange} onBlur={handleBlur} value={values.password}  />
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
                        <div>
                            <div className='flex items-center'>
                                <input name='confirmPassword' type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' className={`input input-bordered ${errors.confirmPassword && touched.confirmPassword && 'input-error'} w-full`} onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}  />
                                <div onClick={handleToggleConfirmPassword} className='absolute right-28 max-lg:right-20 max-md:right-16 max-sm:right-28'>
                                    {showConfirmPassword ? <FiEyeOff size={30}/> : <FiEye size={30}/>}
                                </div>
                            </div>
                            {errors.confirmPassword && touched.confirmPassword && (
                                <label className="label">
                                    <span className='label-text-alt text-error'>{errors.confirmPassword}</span>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className='flex gap-4 items-center h-6 mb-4'>
                        <input type="checkbox" className='h-4 w-4'/>
                        <div className='font-semibold'>Accept terms and condition</div>
                    </div>
                    <button type='submit' className='bg-[#FF8551] rounded-md h-10 flex justify-center items-center w-full'>
                        <div className='text-white font-bold text-md'>Sign Up</div>
                    </button>
                </form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default Register