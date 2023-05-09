import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'
// import Bitmap from '../assets/Bitmap (1).png'
import org1 from '../assets/org1.png'
import org2 from '../assets/org2.png'
import org3 from '../assets/org3.png'
import org4 from '../assets/org4.png'
import male from '../assets/male.png'
import female from '../assets/female.png'
// import jakarta from '../assets/jakarta.png'
// import bandung from '../assets/bandung.png'
// import bali from '../assets/bali.png'
// import solo from '../assets/solo.png'
// import aceh from '../assets/aceh.png'
// import semarang from '../assets/semarang.png'
// import Yogyakarta from '../assets/Yogyakarta.png'
// import Icon1 from '../assets/Icon-01.png'
// import Icon2 from '../assets/Icon-02.png'
// import Icon3 from '../assets/Icon-03.png'
// import Icon4 from '../assets/Icon-04.png'
// import Icon5 from '../assets/Icon-05.png'
// import Icon6 from '../assets/Icon-06.png'
// import BitmapLarge from '../assets/Bitmap-large.png'
import {AiFillFacebook} from "react-icons/ai"
import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import menuHamburger from '../assets/menu-hamburger.png'
import { Link } from "react-router-dom"
import http from "../helpers/http.helper"

const Home = ()=> {
    const [profile, setProfile] = useState({})
    const [events, setEvents] = useState([])
    const [cities, setCities] = useState([])
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("Music")
    const [partners, setPartners] = useState([])

    useEffect(()=> {
        async function getProfileData(){
            const token = window.localStorage.getItem('token')
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        async function getEvents(){
            const {data} = await axios.get('http://localhost:8888/events')
            setEvents(data.results)
        }
        async function getCities(){
            const {data} = await axios.get('http://localhost:8888/city')
            setCities(data.results)
        }
        async function getCategory(){
            const {data} = await axios.get('http://localhost:8888/categories')
            setCategory(data.results)
        }
        async function getPartners(){
            const {data} = await axios.get('http://localhost:8888/partners')
            setPartners(data.results)
        }
        getProfileData()
        getEvents()
        getCities()
        getCategory()
        getPartners()
    }, [])
    const handleClick = (category) => {
        setSelectedCategory(category)
    }
        // const categories = ["Music", "Arts", "Outdoors", "Workshop" ,"Sport", "Festival", "Fashion"]
    // function handleClick(category) {
    //     setSelectedCategory(category);
    // }
    return (
        <>
        <header className="bg-white flex items-center justify-between flex-wrap pt-4 px-4 fixed w-full z-50">
            <section className="flex items-center flex-[1.3] max-md:flex-[2.5]">
                <img src={Fill} className="w-16" />
                <img src={Wetick} className="w-16" />
            </section>
            <section className="sm:hidden menu-toggle-hamburger">
                <img src={menuHamburger} className="header-menu" />
            </section>
            <div id="menu-toggle-active" className="w-full max-sm:hidden block flex-grow sm:flex sm:items-center sm:w-auto">
                <nav className="text-sm sm:flex-grow">
                        <Link to='/home' className="w-[70px] block mt-4 sm:inline-block text-blue-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mt-[0]">Home</Link>
                        <Link to='/create-event' className="w-[104px] block mt-4 sm:inline-block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mt-[0]">Create Event</Link>
                        <Link to='/event' className="w-[0] block mt-4 sm:inline-block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mt-[0]">Location</Link>
                </nav>
                <section>
                    <Link to='/login' className="btn btn-active btn-primary w-[100px] mr-4">Log in</Link>
                    <Link to='/register' className="btn btn-active btn-ghost w-[100px]">Sign Up</Link>
                </section>
            </div>
        </header>
<main className="container mx-auto pt-4">
    <section className="bg-sky-600 h-[35rem]">
        <img src={male} className="w-[14rem] absolute right-[10rem] top-[16rem] max-md:right-[2rem] max-sm:right-[0rem]" />
        <img src={female} className="w-[21rem] absolute top-[13rem] right-[20rem] max-md:right-[10rem] max-sm:right-[7rem]" />
    </section>
    <section className="flex flex-col items-center gap-[30px] my-[40px]">
        <div className="w-[150px] h-[30px] bg-red-300 rounded-[30px] flex justify-center items-center">
            <div className="w-[30px] h-[2px] bg-red-500 mr-2"></div>
            <div className="text-red-500 font-semibold text-md tracking-wider">EVENT</div>
        </div>
        <div className="font-bold text-3xl tracking-wider">Events For You</div>
        <div className="w-[400px] h-[50px] flex justify-between">
            <div className="grid justify-items-center">
                <h1 className="text-slate-400">13</h1>
                <h1 className="text-slate-400">Mon</h1>
            </div>
            <div className="grid justify-items-center">
                <h1 className="text-slate-400">14</h1>
                <h1 className="text-slate-400">Tue</h1>
            </div>
            <div className="grid justify-items-center">
                <h1 className="text-orange-400">15</h1>
                <h1 className="text-orange-400">wed</h1>
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div className="w-[40px] rounded-2xl border-orange-400 h-[80px] border-2 relative top-[-70px]"></div>
            </div>
            <div className="grid justify-items-center">
                <h1 className="text-slate-400">16</h1>
                <h1 className="text-slate-400">Thu</h1>
            </div>
            <div className="grid justify-items-center">
                <h1 className="text-slate-400">17</h1>
                <h1 className="text-slate-400">Fri</h1>
            </div>
        </div>
    </section>
    <section className="w-full flex flex-wrap justify-evenly">
        {events.map(event => {
            return (
        <Link className="w-[200px]" key={event.id} to='/event'>
            <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={`http://localhost:8888/uploads/${event.picture}`} />
            <div className="relative top-[-80px] left-[5px] text-white">
                <h1 className="text-xs">{moment(event.date).format('DD-MM-YYYY')}</h1>
                <h1 className="text-xl font-bold">{event.title}</h1>
            </div>
        </Link>
            )
        })}
        {/* <div className="w-[200px]" key={events[1].id}>
            <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={`http://localhost:8888/uploads/${events.picture}`} />
            <div className="relative top-[-120px] left-[15px] text-white">
                <h1 className="text-[12px]">{moment(events.date).format('DD-MM-YYYY')}</h1>
                <h1 className="text-xl font-bold w-[130px]">{events.title}</h1>
            </div>
        </div>
        <div className="w-[200px] max-sm:hidden" key={events[2].id}>
            <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={`http://localhost:8888/uploads/${events[2].picture}`} />
            <div className="relative top-[-120px] left-[15px] text-white">
                <h1 className="text-[12px]">{moment(events[2].date).format('DD-MM-YYYY')}</h1>
                <h1 className="text-xl font-bold">{events[2].title}</h1>
            </div>
        </div>
        <div className="w-[200px] max-sm:hidden max-md:hidden" key={events[3].id}>
            <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={`http://localhost:8888/uploads/${events[3].picture}`} />
            <div className="relative top-[-120px] left-[15px] text-white">
                <h1 className="text-[12px]">{moment(events[3].date).format('DD-MM-YYYY')}</h1>
                <h1 className="text-xl font-bold w-[130px]">{events[3].title}</h1>
            </div>
        </div>
        <div className="w-[200px] max-sm:hidden max-md:hidden max-xl:hidden" key={events[4].id}>
            <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={`http://localhost:8888/uploads/${events[4].picture}`} />
            <div className="relative top-[-120px] left-[15px] text-white">
                <h1 className="text-[12px]">{moment(events[4].date).format('DD-MM-YYYY')}</h1>
                <h1 className="text-xl font-bold">{events[4].title}</h1>
            </div>
        </div> */}
    </section>
    <section className="flex justify-center items-center gap-3 my-5 mb-24">
        <button className="font-bold rounded-lg text-slate-600 h-8 w-8 bg-slate-200">&larr;</button>
        <button className="font-bold rounded-lg text-white h-8 w-8 bg-blue-500">&rarr;</button>
    </section>
    <section className="bg-blue-500 m-4 md:m-14 rounded-xl bg-center bg-no-repeat bg-cover md:p-24 p-8">
        <div className="flex justify-center md:justify-start mb-5">
        <div className="py-2 px-5 rounded-full inline-flex items-center gap-2 text-white bg-[rgba(255,255,255,0.25)]">
                    <div className="w-8 border-t border-white"></div>
                    <span>LOCATION</span>
                </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 text-white mt-5">
            <div className="text:xl md:text-5xl font-bold w-[360px]">Discover Events Near You</div>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                {cities.map(city => {
                return (
                <div className="w-full md:w-1/4 grid content-center justify-items-center" key={city.id}>
                    <img src={`http://localhost:8888/uploads/${city.picture}`} alt="city1" className="w-[230px] h-[140px] rounded-lg"/>
                    <h5 className="text-xl font-bold mt-2">{city.name}</h5>
                </div>
                )
                })}
            </div>
        </div>
        <div className="flex justify-center md:justify-start mt-5 relative left-[450px] max-md:left-0">
            <a className="text-blue-500 bg-white flex justify-center items-center font-bold min-w-[300px] tracking-widest h-12 rounded-xl" href="#">See All</a>
        </div>
    </section>

            {/* <div className="flex-1 flex flex-col items-center">
                <img src={bandung} alt="city2" />
                Bandung
            </div>
            <div className="flex-1 flex flex-col items-center">
                <img src={bali} alt="city3" />
                Bali
            </div>
        </div> */}
        {/* <div className="md:flex hidden text-white mt-5">
            <div className="flex-1 flex flex-col items-center">
                <img src={aceh} alt="city4" />
                Aceh
            </div>
            <div className="flex-1 flex flex-col items-center">
                <img src={solo} alt="city5" />
                Solo
            </div>
            <div className="flex-1 flex flex-col items-center">
                <img src={Yogyakarta} alt="city6" />
                Yogyakarta
            </div>
            <div className="flex-1 flex flex-col items-center">
                <img src={semarang} alt="city7" />
                Semarang
            </div>
        </div> */}
        {/* <div className="flex justify-center mt-12">
            <div><a className="text-blue-500 bg-white flex justify-center items-center font-bold min-w-[180px] tracking-widest h-12 rounded-xl" href="#">See All</a></div>
        </div>
    </section> */}
    <section className="flex flex-col items-center gap-[30px] my-[40px]">
        <div className="bg-red-200 flex gap-[10px] items-center text-d0093e py-[5px] px-[10px] rounded-[20px]">
            <div></div>
            <div className="text-red-500 font-medium">CATEGORY</div>
        </div>
        <div className="font-bold text-2xl flex flex-col items-center gap-[30px] my-[40px]">Browse Events By Category</div>
        <div className="flex md:flex-row flex-col flex-1 gap-3">
            <div className="flex">
                {category.map(category => (
                    <div
                    className={`flex justify-center items-center min-w-[100px] ${
                        category.name === selectedCategory
                        ? 'text-blue-500 border-b-2 pb-1 border-blue-500 font-bold'
                        : 'text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold'
                    }`}
                    key={category.id}
                    onClick={() => handleClick(category.name)}
                    >
                    {category.name}
                    </div>
                ))}
            </div>
                {/* <div className="flex justify-center items-center min-w-[100px]">
                <a className="text-blue-500 border-b-2 pb-1 border-blue-500 font-bold" href="#">Music</a>
                </div> */}
                {/* <div className="flex justify-center items-center min-w-[100px]">
                    <a className="text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold" href="#">Arts</a>
                </div>
                <div className="flex justify-center items-center min-w-[100px]">
                    <a className="text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold" href="#">Outdoors</a>
                </div>
            </div>
            <div className="flex">
                <div className="flex justify-center items-center min-w-[100px]">
                    <a className="text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold" href="#">Workshop</a>
                </div>
                <div className="flex justify-center items-center min-w-[100px]">
                    <a className="text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold" href="#">Sport</a>
                </div>
                <div className="flex justify-center items-center min-w-[100px]">
                    <a className="text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold" href="#">Festival</a>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center min-w-[100px]">
                    <a className="text-gray-600 border-b-2 pb-1 border-transparent hover:border-red-400 font-bold" href="#">Fashion</a>
                </div>
            </div> */}
        </div>
    </section>
    <section className="flex md:flex-row flex-col justify-center items-center gap-5 my-5 mb-24">
        <div className="hidden md:block">
            <button className="hidden md:inline-block font-bold rounded-lg text-slate-600 h-8 w-8 bg-slate-200">&larr;</button>
        </div>
        {category
        .filter((category) => category.name === selectedCategory)
        .map((category) => {
            return (
        <div className="w-[300px] h-[350px] rounded-xl overflow-hidden flex flex-col" key={category.id}>
            <div className="flex-2 overflow-hidden">
                <img className="object-cover w-full h-[200px]" src={`http://localhost:8888/uploads/${category.picture}`} alt="banner1" />
            </div>
            <div className="flex flex-col justify-end flex-1 min-h-[161px] bg-blue-500 text-white p-8 relative">
                <div className="flex absolute -top-5 ml-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org1} alt="profile1" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org2} alt="profile2" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org3} alt="profile3" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org4} alt="profile4" />
                    </div>
                </div>
                <div>{moment(category.date).format('DD-MM-YYYY')}</div>
                <div className="text-2xl">{category.title}</div>
            </div>
        </div>
            )
        })}
        {/* {selectedCategory && (
        <div>
            <h2>{selectedCategory.name}</h2>
            <p>{selectedCategory.description}</p>
        </div>
        )} */}
        {/* <div className="w-[300px] h-[350px] rounded-xl overflow-hidden flex flex-col">
            <div className="flex-2 overflow-hidden">
                <img className="object-cover w-full h-full" src={BitmapLarge} alt="banner2" />
            </div>
            <div className="flex flex-col justify-end flex-1 min-h-[161px] bg-blue-500 text-white p-8 relative">
                <div className="flex absolute -top-5 ml-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org1} alt="profile1" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org2} alt="profile2" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org3} alt="profile3" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org4} alt="profile4" />
                    </div>
                </div>
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="text-2xl w-[170px]">See it in Gold Class</div>
            </div>
        </div>
        <div className="w-[300px] h-[350px] rounded-xl overflow-hidden flex flex-col">
            <div className="flex-2 overflow-hidden">
                <img className="object-cover w-full h-full" src={Bitmap} alt="banner1" />
            </div>
            <div className="flex flex-col justify-end flex-1 min-h-[161px] bg-blue-500 text-white p-8 relative">
                <div className="flex absolute -top-5 ml-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org1} alt="profile1" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org2} alt="profile2" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org3} alt="profile3" />
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white -ml-2">
                        <img className="w-full h-full object-cover" src={org4} alt="profile4" />
                    </div>
                </div>
                <div>Wed, 15 Nov, 4:00 PM</div>
                <div className="text-2xl">Sights & Sounds Exhibition</div>
            </div>
        </div> */}
        <div>
            <button className="inline-block md:hidden font-bold rounded-lg text-slate-600 h-8 w-8 bg-slate-200">&larr;</button>
            <button className="font-bold rounded-lg text-white h-8 w-8 bg-blue-500">&rarr;</button>
        </div>
    </section>
    <div className="bg-gray-700 bg-repeat flex justify-center items-center text-white py-[95px] bg-cover p-5 md:py-24">
        <section className="flex flex-col items-center gap-[30px] my-[40px]">
            <div className="bg-opacity-25 bg-white w-[150px] h-[30px] flex justify-center items-center rounded-2xl">
                <div className="w-[30px] h-[1px] bg-white mr-3"></div>
                <div className="text-white">PARTNER</div>
            </div>
            <div className="font-bold text-3xl tracking-wider text-center">Our Trusted Partners</div>
            <div className="text-gray-400">By companies like :</div>
            <div className="flex gap-16 md:flex-row flex-col" >
            {partners.map(partner => {
                return (
                <div className="flex gap-16" key={partner.id}>
                    <div>
                        <img src={`http://localhost:8888/uploads/${partner.picture}`} alt="sponsor" />
                    </div>
                    {/* <div>
                        <img src={Icon2} alt="sponsor" />
                    </div> */}
                </div>
                )
            })}
                {/* <div className="flex gap-16">
                    <div>
                    <img src={Icon3} alt="sponsor" />
                    </div>
                    <div>
                    <img src={Icon4} alt="sponsor" />
                    </div>
                    </div>
                    <div className="flex gap-16">
                    <div>
                    <img src={Icon5} alt="sponsor" />
                    </div>
                    <div>
                    <img src={Icon6} alt="sponsor" />
                    </div>
                </div> */}
                </div>
        </section>
    </div>
</main>
<footer className="py-24 text-gray-600">
    <div className="flex flex-col md:flex-row px-12">
        <div className="flex-1 min-w-[300px]">
            <div className="flex flex-col gap-5">
                <div className="flex items-center">
                    <div>
                        <img src={Fill} alt="logo" />
                    </div>
                    <div>
                        <img src={Wetick} className="w-20" />
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
            <div className="font-bold mb-5">Wetick</div>
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
    <div className="px-12">&copy; 2020 Wetick All Rights Reserved</div>
</footer>
        </>
    )
}

export default Home