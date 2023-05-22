import { Link } from "react-router-dom"
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import { useNavigate, } from "react-router-dom"
import { useEffect, useState } from "react"
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { asyncLoginAction } from "../redux/actions/auth.action"
import { Formik } from "formik"
import * as Yup from 'yup'
import propTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../redux/reducers/auth"

const validationSchema = Yup.object({
    email: Yup.string().required().email('Email is invalid'),
    password: Yup.string().required('Password is invalid')
})

const FormLogin = ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => {
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
        <form onSubmit={handleSubmit} className="relative top-[110px] w-[350px]">
        {/* <input onFocus={()=> setWarningMessage('')} type="email" placeholder="Email" className={`input input-bordered ${errorMessage && !errorMessage.includes("wrong password") ? 'input-error' : ''} w-full max-w-xs relative top-[100px]`} name="email" onChange={handleInputChange}/> */}
        <div className="form-control">
        <input 
        type="email" 
        placeholder="Email" 
        className={`input input-bordered ${errors.email && touched.email && 'input-error'} mb-4`} 
        name="email" 
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        />
        {/* <label className="label relative top-[100px]">
            <span className={`label-text-alt ${errorMessage ? 'text-error' : ''}`}>{errorMessage && !errorMessage.includes("wrong password") ? errorMessage : ""}</span>
        </label> */}
        {errors.email && touched.email && (
            <label className="label relative top-[-15px]">
                <span className='label-text-alt text-error'>{errors.email}</span>
            </label>
        )}
        </div>
        
        <div className="form-control">  
            <input
            placeholder="Password" 
            className={`input input-bordered w-full ${errors.password && touched.password && 'input-error'}`}
            type={showPassword? 'text' : 'password'}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
            {errors.password && touched.password && (
            <label className="label">
                <span className='label-text-alt text-error'>{errors.password}</span>
            </label>
        )}
            {/* className={`input input-bordered ${errorMessage && !errorMessage.includes("wrong email") ? 'input-error' : ''} w-full max-w-xs relative top-[115px]`} name="password" onChange={handleInputChange}/> */}
        </div>
        {/* <label className="label relative top-[115px]">
            <span className={`label-text-alt ${errorMessage ? 'text-error' : ''}`}>{errorMessage && !errorMessage.includes("wrong email") ? errorMessage : ""}</span>
        </label> */}
        <div className="relative top-[-35px] left-[300px]" onClick={handleTogglePassword}>
            {showPassword ? <FiEyeOff size={30}/> : <FiEye size={30}/>}
        </div>
    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-[350px] max-sm:w-full relative top-[35px]">Sign In</button>
    </form>
    )
}

FormLogin.propTypes = {
    values: propTypes.objectOf(propTypes.string),
    errors: propTypes.objectOf(propTypes.string),
    touched: propTypes.objectOf(propTypes.bool),
    handleBlur: propTypes.func,
    handleChange: propTypes.func,
    handleSubmit: propTypes.func,
    isSubmitting: propTypes.bool
}

const Login = ()=> {
    // const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const formError = useSelector(state => state.auth.formError)
    const warningMessage = useSelector(state => state.auth.warningMessage)
    const errorMessage = useSelector(state => state.auth.errorMessage)

    useEffect(() => {
        if(token){
            navigate('/home')
        }
    }, [token, navigate])

    const doLogin = async (values, {setSubmitting, setErrors}) => {
        dispatch(clearMessage())
        dispatch(asyncLoginAction(values))
        if(formError.length){
            setErrors({
                email: formError.filter(item => item.param === 'email')[0].message,
                password: formError.filter(item => item.param === 'password')[0].message
            })
        }
        setSubmitting(false)
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
                    <h1 className="text-3xl mb-[15px]">Sign In</h1>
                    <h1 className="max-md:w-[250px]">Hi, Welcome back to Urticket!</h1>
                    {errorMessage && 
                    (<div>
                        <h1 className="alert alert-error mt-4 w-[330px]">{errorMessage}</h1>
                    </div>)}
                    {warningMessage && 
                    (<div>
                        <h1 className="alert alert-warning mt-4 w-[330px]">{warningMessage}</h1>
                    </div>)}
                </div>
                <div>
                    <Formik 
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={doLogin}
                    >
                    {(props) => (
                        <FormLogin {...props} />
                    )}
                    </Formik>
                    <div className="relative top-[90px] flex text-primary">
                        <Link to='/forgot-password' className="relative left-[200px] top-[-40px] tracking-wide font-bold">Forgot Password?</Link>
                    </div>
                </div>
                <div className="relative top-[135px]">
                    <p className="relative left-[110px]">or sign in with</p>
                    <div className="w-[70px] h-[35px] bg-white border relative top-[20px] left-[200px] rounded-[5px] flex justify-center items-center">
                        <button className="btn btn-secondary bg-white w-24 border-primary">
                            <FaFacebook color="#4267B2" size={25}/>
                        </button>
                    </div>
                    <div className="w-[70px] h-[35px] bg-white border relative top-[-15px] left-[50px] rounded-[5px] flex justify-center items-center">
                        <button className="btn btn-secondary bg-white w-24 border-primary">
                            <FcGoogle size={25}/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Login
