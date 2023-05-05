import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import Avatar from '../assets/Avatar.png'
import menuHamburger from '../assets/menu-hamburger.png'
import coklat from '../assets/coklat.png'
import Vector from '../assets/Vector.png'
import tambahBiru from '../assets/tambah biru.png'
import Vector1 from '../assets/Vector (1).png'
import Vector4 from '../assets/Vector (4).png'
import Vector5 from '../assets/Vector (5).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import Vector8 from '../assets/Vector 8.png'
import { Link } from "react-router-dom"
import {AiFillFacebook} from "react-icons/ai"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"

const ManageEvent = ()=> {
    return (
        <>
        <header className="w-full flex justify-between items-center bg-white px-6">
        <div className="flex items-center">
            <img src={Fill} />
            <img src={Wetick} className="w-[89px] h-[36px]" />
        </div>
        <div className="max-md:hidden">
            <nav className="text-black">
                <Link className="mr-8" to='/home'>Home</Link>
                <Link className="mr-8" to='/create-event'>Create Event</Link>
                <Link className="" to='/event'>Location</Link>
            </nav>
        </div>
        <div className="flex items-center max-md:hidden">
            <img className="rounded-full border-2 border-blue-500 p-1" src={Avatar} />
            <h1 className="text-black ml-4">Jhon Tomson</h1>
        </div>
        <div className="md:hidden">
            <img src={menuHamburger} />
        </div>
    </header>
    <main className="w-full flex max-sm:ml-[0]">
        <section className="w-[25%] min-h-[825px] mt-12 max-md:hidden">
            <div className="flex justify-center">
                <img className="rounded-full border-2 border-blue-500 p-1" src={Avatar} />
                <div className="grid ml-4">
                    <h1 className="text-md tracking-wider font-medium">Jhon Tomson</h1>
                    <p className="text-slate-400 text-sm tracking-wider">Entrepreneur, ID</p>
                </div>
            </div>
            <div className="w-[80%] h-[440px] mt-8 grid ml-[20%] content-between">
                <div className="flex items-center font-semibold">
                    <img src={Vector} className="w-[21px] h-[21px]" />
                    <h3 className="ml-6">Profile</h3>
                </div>
                <div className="flex items-center font-semibold ml-12">
                    <img src={Vector1} className="w-[20px] h-[16px]" />
                    <h3 className="ml-6">Card</h3>
                    <div className="relative left-[-85px] w-24 h-[1px] bg-black"></div>
                </div>
                <Link to='/profile' className="flex items-center font-semibold ml-12">
                    <img src={coklat} className="w-[18.75px] h-[18.75px]" />
                    <h3 className="ml-6">Edit Profile</h3>
                </Link>
                <Link to='/change-password' className="flex items-center font-semibold ml-12">
                    <img src={Vector4} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6">Change Password</h3>
                </Link>
                <Link to='/create-event' className="flex items-center font-semibold">
                    <img src={tambahBiru} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6 text-blue-500">Create Event</h3>
                </Link>
                <Link to='/my-booking' className="flex items-center font-semibold">
                    <img src={Vector5} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6">My Booking</h3>
                </Link>
                <Link to='/my-wishlist' className="flex items-center font-semibold">
                    <img src={Vector6} className="w-[20px] h-[18px]" />
                    <h3 className="ml-6">My Wishlist</h3>
                </Link>
                <div className="flex items-center font-semibold">
                    <img src={Vector7} className="w-[18.5px] h-[19px]" />
                    <h3 className="ml-6">Settings</h3>
                </div>
                <div className="flex items-center font-semibold">
                    <img src={Vector8} className="w-[18px] h-[16px]" />
                    <h3 className="ml-6">Logout</h3>
                </div>
            </div>
        </section>
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-md:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">Manage Event</h1>
                <div className="flex justify-center px-8 py-3 items-center bg-blue-100 rounded-md">
                    <p className="text-xs text-blue-500 font-bold tracking-wider">Create</p>
                </div>
            </div>
            <div className="w-[80%] grid content-between h-[80%] mt-10 ml-16 max-sm:ml-4">
                <div className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-md:hidden">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">15</p>
                        <p className="text-slate-400">Wed</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">Sights & Sounds Exhibition</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">Jakarta, Indonesia</p>
                            <p className="text-slate-400 mb-1">Wed, 15 Nov, 4:00 PM</p>
                            <div className="flex">
                                <p className="text-blue-600 font-semibold mr-4">Detail</p>
                                <p className="text-blue-600 font-semibold mr-4">Update</p>
                                <p className="text-blue-600 font-semibold">Delete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="w-full flex justify-center h-[400px] max-md:grid max-sm:ml-8 max-md:mt-[100px]">
        <section className="w-[400px] mt-10 max-md:h-[150px]">
            <div className="flex items-center">
                <img src={Fill} />
                <img src={Wetick} className="w-[90px] h-[35px]" />
            </div>
            <h3 className="font-medium mt-4">Find events you love with our</h3>
            <div className="flex w-[140px] h-[150px] justify-between mt-3">
                <button className="w-[18px] h-[18px]">
                <AiFillFacebook color='8BACAA' size={25} />
                </button>
                <button className="w-[18px] h-[18px]">
                <FaWhatsappSquare color='8BACAA' size={25} />
                </button>
                <button className="w-[18px] h-[18px]">
                <AiFillInstagram color='8BACAA' size={25} />
                </button>
                <button className="w-[18px] h-[18px]">
                <AiOutlineTwitter color='8BACAA' size={25} />
                </button>
            </div>
            <h2 className="text-slate-600 max-md:hidden">© 2020 Wetick All Rights Reserved</h2>
        </section>
        <div className="w-[200px] mt-14">
            <h1 className="font-bold mb-6">Wetick</h1>
            <div className="grid content-between h-[150px] text-slate-400">
                <h4>About Us</h4>
                <h4>Features</h4>
                <h4>Blog</h4>
                <h4>Payment</h4>
                <h4>Mobile App</h4>
            </div>
        </div>
        <div className="w-[200px] mt-14">
            <h1 className="font-bold mb-6">Features</h1>
            <div className="grid content-between h-[150px] text-slate-400">
                <h4>Booking</h4>
                <h4>Creater Event</h4>
                <h4>Discover</h4>
                <h4>Register</h4>
            </div>
        </div>
        <div className="w-[200px] mt-14">
            <h1 className="font-bold mb-6">Company</h1>
            <div className="grid content-between h-[150px] text-slate-400">
                <h4>Partnership</h4>
                <h4>Help</h4>
                <h4>Terms of Service</h4>
                <h4>Privacy Policy</h4>
                <h4>Sitemap</h4>
            </div>
        </div>
        <h2 className="text-slate-600 my-8 md:hidden">© 2020 Wetick All Rights Reserved</h2>
    </footer>
    </>
    )
}

export default ManageEvent