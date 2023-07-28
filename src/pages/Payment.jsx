import Group810 from '../assets/Group810.png'
import chip from '../assets/chip.png'
import logosMastercard from '../assets/logos_mastercard.png'
import bintang from '../assets/bintang.png'
import Group822 from '../assets/Group 822.png'
import ok from '../assets/ok.png'
import Vectorkuning from '../assets/Vector (1)-kuning.png'
import Vectordolar from '../assets/Vector (3)-dolar.png'
import panahbawah from '../assets/panah bawah.png'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import http from '../helpers/http.helper'
import { logout as logoutAction, setWarningMessage } from "../redux/reducers/auth"
import Footer from "../components/Footer"
import NavbarLogout from '../components/NavbarLogout'

const Payment = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [profilePicture, setProfilePicture] = useState({})
    const [profileFullName, setProfileFullname] = useState()
    const {state} = useLocation()
    const [method, setMethod] = useState([])
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(()=> {
        const getPaymentMethod = async() => {
            const {data} = await http(token).get('/payment')
            setMethod(data.results)
        }
        getPaymentMethod()
    }, [token, navigate, state, profileFullName, profilePicture])

    useEffect(()=> {
        async function getProfileData(){
            const {data} = await http(token).get('/profile')
            const dataProfilePicture = data.results.picture
            setProfilePicture(dataProfilePicture)
            setProfileFullname(data.results.fullName)
        }
            getProfileData()
    }, [token])

    const doPayment = async (e) => {
        e.preventDefault()
        const {reservationId} = state
        const form = new URLSearchParams({
            reservationId,
            paymentMethodId: selectedOption
        }).toString()
        console.log(form)
        const {data} = await http(token).post('/payment', form)
        navigate('/my-booking', {replace: true})
    }

    // useEffect(()=> {
    //     console.log(token)
    // }, [token])

    return (
    <>
        <NavbarLogout />
        <form onSubmit={doPayment} className="flex max-md:grid w-[80%] max-md:w-full ml-[10%] max-md:ml-0 bg-white mt-10 rounded-3xl">
            <div className="ml-[5%] mr-[15%]">
                <div className="h-[120px] flex items-center text-2xl font-semibold">
                    <h1>Payment Method</h1>
                </div>
                <div className="w-full flex ml-[8%] mb-8">
                    <div className="flex">
                        <input type="radio" className="ml-6 mr-4 pt-[-20px]" name="option" value='1' checked={selectedOption === "1"} onChange={handleRadioChange} />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <img src={Group810} className='w-10 h-10' defaultChecked={method[0]?.id}/>
                        </div>
                        <h3 className="ml-4 font-semibold">{method[0]?.name}</h3>
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
                        <div className="flex items-center gap-4">
                            <input type="radio" className="ml-6 mr-4 pt-[-20px]" name="option" value='2' checked={selectedOption === "2"} onChange={handleRadioChange} />
                            <div className="p-2 bg-red-200 rounded-md">
                                <img src={ok} className="w-[20px] h-[19px]" />
                            </div>
                            <h1 className="font-semibold tracking-wider">{method[1]?.name}</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" className="ml-6 mr-4 pt-[-20px]" name="option" value='3' checked={selectedOption === "3"} onChange={handleRadioChange} />
                            <div className="p-2 bg-orange-200 rounded-md">
                                <img src={Vectorkuning} className="w-[20px] h-[19px]" />
                            </div>
                            <h1 className="font-semibold tracking-wider">{method[2]?.name}</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="radio" className="ml-6 mr-4 pt-[-20px]" name="option" value='4' checked={selectedOption === "4"} onChange={handleRadioChange} />
                            <div className="px-3 py-2 bg-blue-200 rounded-md">
                                <img src={Vectordolar} className="w-[10px] h-[18px]" />
                            </div>
                            <h1 className="font-semibold tracking-wider">{method[3]?.name}</h1>
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
                        <h1 className="text-blue-500">{state.eventId}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-semibold">Ticket Section</h1>
                        <h1 className="text-blue-500">{state.sectionName}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-semibold">Quantity</h1>
                        <h1 className="text-blue-500">{state.quantity}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-semibold">Total Payment</h1>
                        <h1 className="text-blue-500">{state.totalPayment}</h1>
                    </div>
                </div>
                <div className="w-full h-[55px] flex justify-center items-center rounded-2xl">
                    <button type='submit' className="btn btn-primary w-full text-white text-xl font-normal">Payment</button>
                </div>
            </div>
        </form>
        <Footer />
    </>
    )
}

export default Payment