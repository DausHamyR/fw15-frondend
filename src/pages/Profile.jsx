import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
import Avatar from '../assets/Avatar.png'
import menuHamburger from '../assets/menu-hamburger.png'
import fb from '../assets/fb.png'
import wa from '../assets/wa.png'
import ig from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector (1).png'
import Vector3 from '../assets/Vector (3).png'
import Vector4 from '../assets/Vector (4).png'
import Vector5 from '../assets/Vector (5).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import Vector8 from '../assets/Vector 8.png'
import kamera from '../assets/kamera.png'
import { Link } from "react-router-dom"

const Profile = ()=> {
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
                <a href="./profile.html" className="flex items-center font-semibold ml-12">
                    <img src={Vector3} className="w-[18.75px] h-[18.75px]" />
                    <h3 className="ml-6 text-blue-500">Edit Profile</h3>
                </a>
                <a href="./changePassword.html" className="flex items-center font-semibold ml-12">
                    <img src={Vector4} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6">Change Password</h3>
                </a>
                <a href="myBooking.html" className="flex items-center font-semibold">
                    <img src={Vector5} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6">My Booking</h3>
                </a>
                <a href="myWishlist.html" className="flex items-center font-semibold">
                    <img src={Vector6} className="w-[20px] h-[18px]" />
                    <h3 className="ml-6">My Wishlist</h3>
                </a>
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
        <section className="w-[70%] bg-white min-h-[100vh] mt-12 rounded-xl max-md:ml-[20vw] max-sm:ml-0 max-md:w-full">
            <article className="w-[20%] h-[120px] flex justify-center items-center text-2xl font-semibold">
                <h1>Profile</h1>
            </article>
            <div className="w-[45%] md:hidden">
                <div className="w-full grid">
                    <img src={Avatar} className="h-[110px] w-[110px] justify-self-center p-1 brightness-75 border-[4px] rounded-full border-blue-500" />
                    <img src={kamera} className="relative left-[47.5%] max-md:left-[45%] max-lg:left-[45.5%] top-[-60px]" />
                </div>
            </div>
            <div className="flex max-md:h-[100vh]">
                <article className="w-[55%] grid content-between h-[550px] text-md font-normal pt-8 pl-8">
                    <div className="flex justify-between max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Name</h3>
                        <input type="text" placeholder="Jhon Tomson" className="w-[315px] h-[45px] rounded-2xl border-2 border-slate-400 pl-6 tracking-wider" />
                    </div>
                    <div className="flex max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Username</h3>
                        <p className="pl-[10.7vw] max-md:pl-0 text-slate-400">@jhont0 <span>Edit</span></p>
                    </div>
                    <div className="flex max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Email</h3>
                        <p className="pl-[13.1vw] max-md:pl-0 text-slate-400">jhont0@mail.com <span>Edit</span></p>
                    </div>
                    <div className="flex max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Phone Number</h3>
                        <p className="pl-[8.5vw] max-md:pl-0 text-slate-400">081234567890 <span>Edit</span></p>
                    </div>
                    <div className="flex max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Gender</h3>
                        <div className="flex pl-[12vw] max-md:pl-0">
                            <input type="radio" className="mr-1" name="gender" /><span className="text-slate-400">Male</span> 
                            <input type="radio" className="ml-6 mr-1 pt-[-20px]" name="gender" /><span className="text-slate-400">Female</span> 
                        </div>
                    </div>
                    <div className="flex justify-between max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Profession</h3>
                        <input type="text" placeholder="Entrepreneur" className="w-[315px] h-[45px] rounded-2xl border-2 border-slate-400 pl-6 tracking-wider" />
                    </div>
                    <div className="flex justify-between max-md:grid max-md:mb-6">
                        <h3 className="max-md:mb-2">Nationality</h3>
                        <input type="text" placeholder="Indonesia" className="w-[315px] h-[45px] rounded-2xl border-2 border-slate-400 pl-6 tracking-wider" />
                    </div>
                    <div className="flex max-md:grid">
                        <h3 className="max-md:mb-2">Birthday Date</h3>
                        <p className="pl-[9vw] max-md:pl-0 text-slate-400">24 / 10 / 2000 <span>Edit</span></p>
                    </div>
                </article>
                <div className="w-[45%] h-[550px] max-lg:hidden">
                    <div className="w-full grid">
                        <img src={Avatar} className="h-[110px] w-[110px] justify-self-center p-1 brightness-75 border-[4px] rounded-full border-blue-500" />
                        <img src={kamera} className="relative left-[47.5%] max-md:left-[45%] max-lg:left-[45.5%] top-[-60px]" />
                    </div>
                    <div className="w-[80%] h-[40px] mx-[10%] flex justify-center items-center border-2 rounded-md border-blue-500 mt-8">
                        <h1 className="text-blue-500 font-bold tracking-wider">Choose Photo</h1>
                    </div>
                    <div className="w-[80%] mx-[10%]">
                        <p className="my-4">Image size: max, 2 MB</p>
                        <p>Image formats: .JPG, .JPEG, .PNG</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 ml-8">
                <button className="w-[315px] h-[60px] bg-blue-500 text-white text-xl rounded-xl">Save</button>
            </div>
        </section>
    </main>
    <footer className="w-full flex justify-center h-[400px] max-md:grid max-sm:ml-8">
        <section className="w-[400px] mt-10 max-md:h-[150px]">
            <div className="flex items-center">
                <img src={Fill} />
                <img src={Wetick} className="w-[90px] h-[35px]" />
            </div>
            <h3 className="font-medium mt-4">Find events you love with our</h3>
            <div className="flex w-[120px] h-[150px] justify-between mt-3">
                <img src={fb} className="w-[18px] h-[18px]" />
                <img src={wa} className="w-[18px] h-[18px]" />
                <img src={ig} className="w-[18px] h-[18px]" />
                <img src={twitter} className="w-[18px] h-[18px]" />
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

export default Profile