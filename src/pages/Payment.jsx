import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import Avatar from '../assets/Avatar.png'
import menuHamburger from '../assets/menu-hamburger.png'
import {AiFillFacebook} from "react-icons/ai"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import Ellipse7 from '../assets/Ellipse 7.png'
import Ellipse8 from '../assets/Ellipse 8.png'
import cardBiru from '../assets/card-biru.png'
import chip from '../assets/chip.png'
import logosMastercard from '../assets/logos_mastercard.png'
import bintang from '../assets/bintang.png'
import Group822 from '../assets/Group 822.png'
import ok from '../assets/ok.png'
import Vectorkuning from '../assets/Vector (1)-kuning.png'
import Vectordolar from '../assets/Vector (3)-dolar.png'
import panahbawah from '../assets/panah bawah.png'
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
        <div className="ml-[5%] mr-[15%]">
            <div className="h-[120px] flex items-center text-2xl font-semibold">
                <h1>Payment Method</h1>
            </div>
            <div className="w-[30%] max-xl:w-full flex ml-[8%] mb-8">
                <div className="flex">
                    <img src={Ellipse8} className="w-[7px] h-[7px] self-center mr-4" />
                </div>
                <div className="flex items-center">
                    <div className="p-2 border-1 bg-slate-300 rounded-md">
                        <img src={cardBiru} className="w-[24px] h-[24px]" />
                    </div>
                    <h3 className="ml-4">Card</h3>
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-[285px] h-[173px] bg-amber-500 ml-[10%] max-xl:ml-0 rounded-xl">
                    <div className="flex justify-between py-4 px-6">
                        <img src={chip} />
                        <img src={logosMastercard} />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <img src={bintang} className="mr-6" />
                        <img src={bintang} className="mr-6" />
                        <img src={bintang} className="mr-6" />
                        <h2 className="text-white font-bold tracking-widest">1424</h2>
                    </div>
                    <div className="flex justify-around items-center mt-6">
                        <h2 className="text-white tracking-wider text-sm">Jhon Tomson</h2>
                        <h2 className="text-white tracking-wider text-sm">Exp. 24 / 03</h2>
                    </div>
                </div>
                <div>
                    <img src={Group822} />
                </div>
            </div>
            <div className="flex ml-[8%] mt-10 pb-16">
                <div className="grid content-between h-[200px] mr-28">
                    <div className="flex items-center">
                        <img src={Ellipse7} className="w-[15px] h-[15px] mr-4" />
                        <div className="p-2 bg-red-200 rounded-md mr-4">
                            <img src={ok} className="w-[20px] h-[19px]" />
                        </div>
                        <h1 className="font-semibold tracking-wider">Bank Transfer</h1>
                    </div>
                    <div className="flex items-center">
                        <img src={Ellipse7} className="w-[15px] h-[15px] mr-4" />
                        <div className="p-2 bg-orange-200 rounded-md mr-4">
                            <img src={Vectorkuning} className="w-[20px] h-[19px]" />
                        </div>
                        <h1 className="font-semibold tracking-wider">Retail</h1>
                    </div>
                    <div className="flex items-center">
                        <img src={Ellipse7} className="w-[15px] h-[15px] mr-4" />
                        <div className="px-3 py-2 bg-blue-200 rounded-md mr-4">
                            <img src={Vectordolar} className="w-[10px] h-[18px]" />
                        </div>
                        <h1 className="font-semibold tracking-wider">E-Money</h1>
                    </div>
                </div>
                <div className="grid mt-3 h-[175px] content-between">
                    <img src={panahbawah} />
                    <img src={panahbawah} />
                    <img src={panahbawah} />
                </div>
            </div>
        </div>
        <div className="w-[40%] max-md:ml-8 max-md:w-[90%] mt-10">
            <h1 className="font-bold text-2xl tracking-wider mb-12">Ticket Detail</h1>
            <div className="grid content-between h-[180px] mb-12">
                <div className="flex justify-between">
                    <h1 className="font-semibold">Event</h1>
                    <h1 className="text-blue-500">Sights & Sounds Exhibition</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Ticket Section</h1>
                    <h1 className="text-blue-500">VIP</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Quantity</h1>
                    <h1 className="text-blue-500">2</h1>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-semibold">Total Payment</h1>
                    <h1 className="text-blue-500">$70</h1>
                </div>
            </div>
            <div className="w-full h-[55px] bg-blue-500 flex justify-center items-center rounded-2xl">
                <button className="text-white text-xl font-normal">Payment</button>
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
    </footer>
        </>
    )
}

export default Tickets