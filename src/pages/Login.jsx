import { Link } from "react-router-dom"
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import { useNavigate } from "react-router-dom"
import http from '../helpers/http.helper'
import { useEffect, useState } from "react"

const Login = ()=> {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [token, setToken] = useState('')
    const doLogin = async (event) => {
        try{
            event.preventDefault()
            const {value: email} = event.target.email
            const {value: password} = event.target.password
            const body = new URLSearchParams({email, password}).toString()
            const {data} = await http().post('http://localhost:8888/auth/login', body)
            window.localStorage.setItem('token', data.results.token)
            setErrorMessage('')
            setToken(data.results.token)
        }catch(err){
            console.log(err)
            const message = err?.response?.data?.message
            if(message){
                setErrorMessage(message)
            }
        }
    }
    useEffect(() => {
        if(token){
            navigate('/home')
        }
    }, [token, navigate])
    return (
        <main className="container mx-auto flex h-[100vh]">
        <section className="bg-blue-500 w-[50%] max-md:hidden">
            <img src={male} className="relative left-[55%] top-[300px]" />
            <img src={female} className="relative left-[5%] top-[-90px]" />
        </section>
        <section className="bg-white w-[50%] max-md:w-full">
            <div className="w-[70%] h-[80vh] my-[80px] mx-[15%]">
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
                </div>
                <div>
                    <form onSubmit={doLogin}>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs relative top-[100px]" name="email" />
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs relative top-[115px]" name="password" />
                    <button className="btn btn-primary w-[315px] max-sm:w-full relative top-[185px]">Sign In</button>
                    </form>
                    <div className="relative top-[90px] flex text-blue-500">
                        <Link to='/forgot-password' className="relative left-[170px] tracking-wide font-bold">Forgot Password?</Link>
                    </div>
                </div>
                <div className="relative top-[205px]">
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
