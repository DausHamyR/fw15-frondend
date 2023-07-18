import Avatar from '../assets/Avatar.png'
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector (1).png'
import Vector3 from '../assets/Vector (3).png'
import Vector4 from '../assets/Vector (4).png'
import Vector5 from '../assets/Vector (5).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import kamera from '../assets/kamera.png'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import http from '../helpers/http.helper'
import moment from 'moment'
import { Formik, Field } from 'formik'
import defaultProfile from '../assets/default-avatar.jpg'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import Logout from '../components/Logout'
import Footer from "../components/Footer"
import NavbarLogout from '../components/NavbarLogout'

const Profile = ()=> {
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = useState({})
    const [editUsername, setEditUsername] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhoneNumber, setEditPhoneNumber] = useState(false)
    const [selectedPicture, setSelectedPicture] = useState(false)
    // const [editGender, setEditGender] = useState(false)
    // const [editProfession, setEditProfession] = useState(false)
    // const [editNationality, setEditNationality] = useState(false)
    const [editBirthday, setEditBirthday] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    
    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])

    useEffect(() => {
        console.log(selectedPicture)
    }, [selectedPicture])

    const editProfile = async (values) => {
        setOpenModal(true)
        const form = new FormData()
        Object.keys(values).forEach((key)=> {
            if(values[key]) {
                if(key === 'birthDate') {
                    form.append(key, moment(values[key], 'DD-MM-YYYY').format('YYYY/MM/DD'))
                }else {
                    form.append(key, values[key])
                }
            }
        })
        if(selectedPicture) {
            form.append('picture', selectedPicture)
        }
        const {data} = await http(token).patch('/profile', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        setProfile(data.results)
        setEditBirthday(false)
        setEditUsername(false)
        setEditEmail(false)
        setEditPhoneNumber(false)
        setOpenModal(false)
    }

    // useEffect(()=> {
    //     if(initToken){
    //         if(!token){
    //             navigate('/login', {state: {warningMessage: 'You have to login first!'}})
    //         }   
    //     }
    // }, [token, initToken, navigate])
    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <section className="w-[25%] min-h-[825px] mt-12 max-md:hidden">
            <div className="flex justify-center">
            {profile?.picture && <img className="w-12 rounded-full border-2 border-blue-500 p-1" src={profile.picture.startsWith('https')?profile.picture : `http://localhost:8888/uploads/${profile.picture}`} />}
                <div className="grid ml-4">
                    <h1 className="text-md tracking-wider font-medium">{profile?.fullName}</h1>
                    <p className="text-slate-400 text-sm tracking-wider">{profile?.profession}</p>
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
                    <img src={Vector3} className="w-[18.75px] h-[18.75px]" />
                    <h3 className="ml-6 text-blue-500">Edit Profile</h3>
                </Link>
                <Link to='/change-password' className="flex items-center font-semibold ml-12">
                    <img src={Vector4} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6">Change Password</h3>
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
                {/* <button onClick={doLogout} className="flex items-center font-semibold">
                    <img src={Vector8} className="w-[18px] h-[16px]" />
                    <h3 className="ml-6">Logout</h3>
                </button> */}
                <Logout />
            </div>
        </section>
        <Formik
            initialValues={{
                fullName: profile?.fullName,
                username: profile?.username,
                email: profile?.email,
                phoneNumber: profile?.phoneNumber,
                gender: profile?.gender ? "1" : "0",
                profession: profile?.profession,
                nationality: profile?.nationality,
                birthDate: profile?.birthDate && moment(profile.birthDate).format('YYYY/MM/DD')
            }}
            onSubmit={editProfile}
            enableReinitialize
        >
            {({handleSubmit, handleChange, handleBlur, errors, touched, values})=> (
            <form onSubmit={handleSubmit} className="w-[70%] bg-white min-h-[100vh] mt-12 rounded-xl max-md:ml-[20vw] max-sm:ml-0 max-md:w-full">
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
                        <div className="flex justify-between items-center max-md:grid max-md:mb-6">
                            <h3 className="max-md:mb-2">Name</h3>
                            <input name='fullName' onChange={handleChange} onBlur={handleBlur} value={values.fullName} type="text" placeholder={`${profile.fullName}`} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="flex items-center max-md:grid max-md:mb-6">
                            <div className='flex justify-between w-[23%]'>
                                <h3 className="max-md:mb-2">Username</h3>
                                <div className='flex justify-center gap-5'>
                                    {!editUsername && <p className="max-md:pl-0 text-slate-400 ml-[150px]">{profile?.username === null ? <span className='text-red-400'>Not Set</span> : profile?.username}</p>}
                                    {!editUsername && <button onClick={()=> setEditUsername(true)} className='text-primary font-bold'>Edit</button>}
                                </div>
                            </div>
                            {editUsername && <input name='username' onChange={handleChange} onBlur={handleBlur} value={values.username} type='text' className="input input-bordered w-full max-w-xs ml-[160px]" />}
                        </div>
                        <div className="flex items-center max-md:grid max-md:mb-6">
                            <div className='flex justify-between w-[23%]'>
                                <h3 className="max-md:mb-2">Email</h3>
                                <div className='flex justify-center gap-5'>
                                    {!editEmail && <p className="max-md:pl-0 text-slate-400 ml-[150px]">{profile?.email === null ? <span className='text-red-400'>Not Set</span> : profile?.email}</p>}
                                    {!editEmail && <button onClick={()=> setEditEmail(true)} className='text-primary font-bold ml-8'>Edit</button>}
                                </div>
                            </div>
                            {editEmail && <input name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} type='email' className="input input-bordered w-full max-w-xs ml-[160px]" />}
                        </div>
                        <div className="flex items-center max-md:grid max-md:mb-6">
                        <div className='flex justify-between w-[23%]'>
                                <h3 className="max-md:mb-2">Phone Number</h3>
                                <div className='flex justify-center gap-5'>
                                    {!editPhoneNumber && <p className="max-md:pl-0 text-slate-400 ml-[150px]">{profile?.phoneNumber === null ? <span className='text-red-400'>Not Set</span> : profile?.phoneNumber}</p>}
                                    {!editPhoneNumber && <button onClick={()=> setEditPhoneNumber(true)} className='text-primary font-bold ml-3'>Edit</button>}
                                </div>
                            </div>
                            {editPhoneNumber && <input name='phoneNumber' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} type='text' className="input input-bordered w-full max-w-xs ml-[160px]" />}
                        </div>
                        <div className="flex items-center max-md:grid max-md:mb-6">
                            <h3 className="max-md:mb-2">Gender</h3>
                            <div className="flex pl-[12vw] max-md:pl-0">
                                <Field type="radio" className="mr-1" name="gender" value='0' /><div className="text-slate-400">Male</div> 
                                <Field type="radio" className="ml-6 mr-1 pt-[-20px]" name="gender" value='1' /><div className="text-slate-400">Female</div> 
                            </div>
                        </div>
                        <div className="flex justify-between items-center max-md:grid max-md:mb-6">
                            <h3 className="max-md:mb-2">Profession</h3>
                            <select name='profession' onChange={handleChange} onBlur={handleBlur} value={values.profession}  className="input input-bordered w-full max-w-xs">
                                <option className='hidden'>Select Profession</option>
                                <option>Fullstack Web Developer</option>
                                <option>Backend Developer</option>
                                <option>Frontend Developer</option>
                            </select>
                        </div>
                        <div className="flex justify-between items-center max-md:grid max-md:mb-6">
                            <h3 className="max-md:mb-2">Nationality</h3>
                            <select name='nationality' onChange={handleChange} onBlur={handleBlur} value={values.nationality}  className="input input-bordered w-full max-w-xs">
                                <option className='hidden'>Select Nationality</option>
                                <option>Indonesia</option>
                            </select>
                        </div>
                        <div className="flex items-center max-md:grid">
                        <div className='flex justify-between w-[23%]'>
                                <h3 className="max-md:mb-2">Birthday Date</h3>
                                <div className='flex justify-center gap-5'>
                                    {!editBirthday && <p className="max-md:pl-0 text-slate-400 ml-[150px]">{profile?.birthDate === null ? <span className='text-red-400'>Not Set</span> : moment(profile?.birthDate).format('DD/MM/YYYY')}</p>}
                                    {!editBirthday && <button onClick={()=> setEditBirthday(true)} className='text-primary font-bold'>Edit</button>}
                                </div>
                            </div>
                            {editBirthday && <input name='birthDate' onChange={handleChange} onBlur={handleBlur} value={values.birthDate} type='date' className="input input-bordered w-full max-w-xs ml-[160px]" />}
                        </div>
                    </article>
                    <div className="w-[45%] h-[550px] max-md:hidden">
                        <div className="w-[80%] grid">
                            <img src={
                                profile?.picture?.startsWith('https') ?
                                profile?.picture :
                                (
                                    profile?.picture === null ?
                                    defaultProfile :
                                    `http://${import.meta.env.VITE_BACKEND_URL}/uploads/${profile?.picture}`
                                )} 
                            className="h-[110px] w-[110px] justify-self-center p-1 brightness-75 border-[4px] rounded-full border-blue-500" />
                            <img src={kamera} className="relative left-[47.5%] max-md:left-[45%] max-lg:left-[45.5%] top-[-60px]" />
                        </div>
                        <label >
                            <span className='btn btn-outline btn-primary w-[80%] mt-8' >Choose Photo</span>
                            <input name='picture' onChange={(e)=>setSelectedPicture(e.target.files[0])} type="file" className='hidden'/>
                        </label>
                        {/* <div className="w-[80%] h-[40px] mx-[10%] flex justify-center items-center border-2 rounded-md border-blue-500 mt-8">
                            <h1 className="text-blue-500 font-bold tracking-wider">Choose Photo</h1>
                        </div> */}
                        <div className="w-[80%] mx-[10%]">
                            <p className="my-4">Image size: max, 2 MB</p>
                            <p>Image formats: .JPG, .JPEG, .PNG</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 ml-8">
                    <button className="btn btn-primary w-full max-w-xs">Save</button>
                </div>
            </form>
            )}
        </Formik>
    </main>
    <Footer />
    <input type="checkbox" id="loading" className="modal-toggle" checked={openModal}/>
<div className="modal">
    <div className="modal-box bg-transparent shadow-none">
        <div className='flex justify-center'>
            <AiOutlineLoading3Quarters className='animate-spin' color='white' size={80}/>
        </div>
    </div>
</div>
    </>
    )
}

export default Profile