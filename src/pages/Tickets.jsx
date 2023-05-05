import minAndPlus from '../assets/min and plus.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import Avatar from '../assets/Avatar.png'
import stadion from '../assets/stadion.png'
import sort from '../assets/sort.png'
import menuHamburger from '../assets/menu-hamburger.png'
import tiketBlue from '../assets/tiket-blue.png'
import tiketMerah from '../assets/tiket-merah.png'
import tiketYellow from '../assets/tiket-yelow.png'
import {AiFillFacebook} from "react-icons/ai"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import { Link } from "react-router-dom"

const Tickets = ()=> {
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
    <main className="flex max-md:grid w-[80%] max-md:w-full ml-[10%] max-md:ml-0 bg-white mt-10 rounded-3xl">
        <div className="ml-[5%]">
            <img src={stadion} />
        </div>
        <div className="w-[37.5%] max-md:ml-8 max-md:w-[90%] mt-10">
            <div className="grid">
                <div className="mb-10">
                    <div className="flex justify-between mb-12">
                        <div>
                            <h1 className="font-bold text-xl">Tickets</h1>
                        </div>
                        <div className="flex">
                            <h1 className="w-16 mr-4">By Price</h1>
                            <img src={sort} />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-md">
                                <img src={tiketBlue} />
                            </div>
                            <div className="ml-3">
                                <h1>Section reg, Row 1</h1>
                                <h1 className="text-slate-400 text-sm">12 Seats available</h1>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1>$15</h1>
                            <h1 className="text-slate-400">per person</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="font-semibold">Quantity</h1>
                        <div>
                            <img src={minAndPlus} />
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-2 bg-red-100 rounded-md">
                                <img src={tiketMerah} />
                            </div>
                            <div className="ml-3">
                                <h1>Section vip, Row 2</h1>
                                <h1 className="text-slate-400 text-sm">9 Seats available</h1>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1>$35</h1>
                            <h1 className="text-slate-400">per person</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="font-semibold">Quantity</h1>
                        <div>
                            <img src={minAndPlus} />
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="p-2 bg-orange-100 rounded-md">
                                <img src={tiketYellow} />
                            </div>
                            <div className="ml-3">
                                <h1>Section vvip, Row 3</h1>
                                <h1 className="text-slate-400 text-sm">6 Seats available</h1>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1>$50</h1>
                            <h1 className="text-slate-400">per person</h1>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="font-semibold">Quantity</h1>
                        <div>
                            <img src={minAndPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="grid content-between h-[100px] font-semibold">
                    <h1>Ticket Section</h1>
                    <h1>Quantity</h1>
                    <h1>Total Payment</h1>
                </div>
                <div className="grid content-between h-[100px] text-blue-500 font-semibold">
                    <h1>VIP</h1>
                    <h1>2</h1>
                    <h1>$70</h1>
                </div>
            </div>
            <div className="flex justify-center items-center text-white bg-blue-500 w-[70%] max-md:w-full h-[45px] mt-10 rounded-xl mb-16">
                <button className="font-semibold">Checkout</button>
            </div>
        </div>
    </main>
    <footer className="w-full flex justify-center h-[400px] max-md:grid max-sm:ml-8">
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
    </footer></>
    )
}

export default Tickets