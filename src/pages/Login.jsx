import { Link } from "react-router-dom"
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'

const Login = ()=> {
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
                    <h1 className="text-3xl mb-[15px]">Sign In</h1>
                    <h1 className="max-sm:w-[250px]">Hi, Welcome back to Urticket!</h1>
                </div>
                <div>
                    <form action="">
                        <input type="text" placeholder="Username" className="w-[315px] h-[45px] bg-white border rounded-[15px] relative top-[110px] pl-[25px] tracking-wide" />
                        <input type="email" placeholder="Email" className="w-[315px] h-[45px] bg-white border rounded-[15px] relative top-[125px] pl-[25px] tracking-wide" />
                        <input type="password" placeholder="Password" className="w-[315px] h-[45px] bg-white border rounded-[15px] relative top-[140px] pl-[25px] tracking-wide" />
                    </form>
                    <div className="relative top-[150px] flex text-blue-500">
                        <Link to='/forgot-password' className="relative left-[40%] tracking-wide font-bold">Forgot Password?</Link>
                    </div>
                    <button className="w-[315px] h-[45px] bg-blue-500 rounded-[15px] relative top-[185px] text-white text-lg tracking-wider">Sign In</button>
                </div>
                <div className="relative top-[205px]">
                    <p className="relative left-[25%]">or sign in with</p>
                    <div className="w-[70px] h-[35px] bg-white border relative top-[20px] left-[40%] rounded-[5px] flex justify-center items-center">
                        <button className="btn btn-secondary bg-white w-24 border-primary">
                            <FaFacebook color="#4267B2" size={25}/>
                        </button>
                    </div>
                    <div className="w-[70px] h-[35px] bg-white border relative top-[-15px] left-[15%] rounded-[5px] flex justify-center items-center">
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
