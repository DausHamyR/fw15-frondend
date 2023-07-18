import logo from '../assets/logo_kelinci.png'
import {AiFillFacebook} from "react-icons/ai"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"

const Footer = ()=> {
    return (
        <footer className="py-24 text-gray-600">
    <div className="flex flex-col md:flex-row px-12">
        <div className="flex-1 min-w-[300px]">
            <div className="flex flex-col gap-5">
                <div className="flex items-center">
                    <div>
                        <img src={logo} className='w-20' alt="logo" />
                    </div>
                </div>
                <div className="font-medium">Find events you love with our</div>
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
            </div>
        </div>
        <div className="flex-1">
            <div className="font-bold mb-5">Cruelty</div>
            <ul className="flex flex-col gap-3">
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Payments</a>
                </li>
                <li>
                    <a href="#">Mobile App</a>
                </li>
            </ul>
        </div>
        <div className="flex-1">
            <div className="font-bold mb-5">Features</div>
            <ul className="flex flex-col gap-3">
                <li>
                    <a href="#">Booking</a>
                </li>
                <li>
                    <a href="#">Create Event</a>
                </li>
                <li>
                    <a href="#">Discover</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
            </ul>
        </div>
        <div className="flex-1">
            <div className="font-bold mb-5">Company</div>
            <ul className="flex flex-col gap-3">
                <li>
                    <a href="#">Partnership</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <a href="#">Terms of Service</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Sitemap</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-12">&copy; 2023 Cruelty Free All Rights Reserved</div>
</footer>
    )
}

export default Footer