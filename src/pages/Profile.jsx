import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import http from '../helpers/http.helper'
import moment from 'moment'
import { Formik, Field } from 'formik'
import defaultProfile from '../assets/default-avatar.png'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import Footer from "../components/Footer"
import NavbarLogout from '../components/NavbarLogout'
import Dashboard from '../components/Dashboard'
import {dataProfile} from '../redux/reducers/profile';

const Profile = ()=> {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = useState({})
    const [editUsername, setEditUsername] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhoneNumber, setEditPhoneNumber] = useState(false)
    const [selectedPicture, setSelectedPicture] = useState(false)
    const [editGender, setEditGender] = useState(false)
    const [editProfession, setEditProfession] = useState(false)
    const [editNationality, setEditNationality] = useState(false)
    const [editBirthday, setEditBirthday] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])

    // useEffect(() => {
    //     console.log(selectedPicture)
    // }, [selectedPicture])

    const editProfile = async (values) => {
        setOpenModal(true)
        const form = new FormData()
        Object.keys(values).forEach((key)=> {
            if(values[key]) {
                form.append(key, values[key])
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
        console.log(data.results)
        dispatch(dataProfile(data.results))
        setProfile(data.results)
        setEditBirthday(false)
        setEditUsername(false)
        setEditEmail(false)
        setEditPhoneNumber(false)
        setOpenModal(false)
    }

    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <Dashboard />
        <Formik
            initialValues={{
                fullName: profile?.fullName,
                username: profile?.username,
                email: profile?.email,
                phoneNumber: profile?.phoneNumber,
                gender: profile?.gender ? "1" : "0",
                profession: profile?.profession,
                nationality: profile?.nationality,
                birthDate: profile?.birthDate
                // birthDate: profile?.birthDate && moment(profile.birthDate).format('YYYY/MM/DD')
            }}
            onSubmit={editProfile}
            enableReinitialize
        >
            {({handleSubmit, handleChange, handleBlur, values})=> (
        <form onSubmit={handleSubmit} className='bg-slate-400 w-3/4 max-lg:w-full my-12 rounded-xl'>
            <div className='flex flex-wrap-reverse justify-center'>
                <div className='w-[600px] my-8 mx-12'>
                    <div className='font-bold text-2xl mb-6'>Profile</div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Name</div>
                            <input name='fullName' type="text" placeholder='Full Name' className={`input input-bordered w-full`} onChange={handleChange} onBlur={handleBlur} value={values.fullName} />
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Username</div>
                            {editUsername ? 
                                <input name='username' type="text" placeholder='Input Username' className={`input input-bordered w-full`} onChange={handleChange} onBlur={handleBlur} value={values.username} /> :
                                <>
                                    <div>{profile.username}</div>
                                    <button onClick={()=> setEditUsername(true)} className='text-[#FF8551] font-bold'>Edit</button>
                                </>
                            }
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Email</div>
                            {editEmail ? 
                                <input name='email' type="text" placeholder='Input Email' className={`input input-bordered w-full`} onChange={handleChange} onBlur={handleBlur} value={values.email} /> :
                                <>
                                    <div>{profile.email}</div>
                                    <button onClick={()=> setEditEmail(true)} className='text-[#FF8551] font-bold'>Edit</button>
                                </>
                            }
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Phone Number</div>
                            {editPhoneNumber ? 
                                <input name='phoneNumber' type="text" placeholder='Input Phone Number' className={`input input-bordered w-full`} onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} /> :
                                <>
                                    <div>{profile.phoneNumber}</div>
                                    <button onClick={()=> setEditPhoneNumber(true)} className='text-[#FF8551] font-bold'>Edit</button>
                                </>
                            }
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Gender</div>
                            <div className='flex items-center'>
                                <Field type="radio" className="mr-1" name="gender" value='0' /><div className="font-semibold">Male</div> 
                                <Field type="radio" className="ml-6 mr-1 pt-[-20px]" name="gender" value='1' /><div className="font-semibold">Female</div> 
                            </div>
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Profession</div>
                            <select name='profession' onChange={handleChange} onBlur={handleBlur} value={values.profession} className="input input-bordered w-full">
                                    <option className='hidden'>Select Profession</option>
                                    <option>Fullstack Web Developer</option>
                                    <option>Backend Developer</option>
                                    <option>Frontend Developer</option>
                                </select>
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Nationality</div>
                            <select name='nationality' onChange={handleChange} onBlur={handleBlur} value={values.nationality} className="input input-bordered w-full">
                                    <option className='hidden'>Select Nationality</option>
                                    <option>Indonesia</option>
                                    <option>Singapure</option>
                                    <option>Malaysia</option>
                                </select>
                        </div>
                        <div className='flex items-center gap-16 max-sm:flex-wrap max-sm:gap-2'>
                            <div className='font-semibold w-[120px]'>Birthday Date</div>
                            <input name='birthDate' type="date" placeholder='Input Date' className={`input input-bordered w-full`} onChange={handleChange} onBlur={handleBlur} value={values.birthDate} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-[300px] mt-12 gap-4'>
                    <div >
                        <img src={
                            profile?.picture ? 
                            profile?.picture :
                            defaultProfile} className='w-32 h-32 rounded-full object-cover border-2 p-1'/>
                    </div>
                    <label className='cursor-pointer bg-white border-blue-500 border-2 py-4 px-6 rounded-xl'>
                        <div>Choose Photo</div>
                        <input name='picture' onChange={(e)=>setSelectedPicture(e.target.files[0])} type="file" className='hidden'/>
                    </label>
                </div>
            </div>
            <div className="mt-2 mx-12 mb-8">
                <button type='submit' className="btn btn-primary w-full max-w-xs">Save</button>
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