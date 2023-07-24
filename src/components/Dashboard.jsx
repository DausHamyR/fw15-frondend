import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logout as logoutAction } from "../redux/reducers/auth"
import defaultavatar from '../assets/default-avatar.png'
import {CgProfile} from 'react-icons/cg'
import {BsCreditCard2BackFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {FiUnlock} from 'react-icons/fi'
import {GoChecklist} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillSetting } from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'

const Dashboard = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const doLogout = ()=> {
        window.localStorage.removeItem('token')
        dispatch(logoutAction())
        navigate('/login')
    }
    const getProfile = useSelector(state => state.profile.data)

    // useEffect(() => {
    //     console.log(getProfile)
    // }, [getProfile])

    return (
        <>
            <div className='w-1/4 mx-16 max-lg:hidden'>
                <div className='flex items-center my-8 gap-4'>
                    <img src={getProfile.picture ? getProfile?.picture : defaultavatar} className='w-20 h-20 rounded-full'/>
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>{getProfile.fullName}</div>
                        <div className='text-slate-400'>{getProfile.profession}, {getProfile.nationality}</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='grid gap-6'>
                        <div className={`flex cursor-pointer items-center gap-2 hover:text-blue-500 font-semibold`}>
                            <CgProfile size={25}/>
                            <div className={`hover:text-blue-500 font-semibold`}>Profile</div>
                        </div>
                        <div className={`flex pl-8 cursor-pointer items-center gap-2 hover:text-blue-500 font-semibold`}>
                            <BsCreditCard2BackFill size={25}/>
                            <div className={`hover:text-blue-500 font-semibold`}>Card</div>
                        </div>
                        <Link to='/profile' className={`flex pl-8 cursor-pointer items-center gap-2 hover:text-blue-500 ${location.pathname === '/profile' ? 'text-[#FF8551]' : ''} font-semibold`}>
                            <AiFillEdit size={25}/>
                            <div>Edit Profile</div>
                        </Link>
                        <Link to='/change-password' className={`flex pl-8 cursor-pointer items-center gap-2 hover:text-blue-500 ${location.pathname === '/change-password' ? 'text-[#FF8551]' : ''} font-semibold`}>
                            <FiUnlock size={25}/>
                            <div>Change Password</div>
                        </Link>
                        <Link to='/my-booking' className={`flex cursor-pointer items-center gap-2 hover:text-blue-500 ${location.pathname === '/my-booking' ? 'text-[#FF8551]' : ''} font-semibold`}>
                            <GoChecklist size={25}/>
                            <div>MyBooking</div>
                        </Link>
                        <Link to='/my-wishlist' className={`flex cursor-pointer items-center gap-2 hover:text-blue-500 ${location.pathname === '/my-wishlist' ? 'text-[#FF8551]' : ''} font-semibold`}>
                            <AiOutlineHeart size={25}/>
                            <div>MyWishlist</div>
                        </Link>
                        <div className={`flex cursor-pointer items-center gap-2 hover:text-blue-500 font-semibold`}>
                            <AiFillSetting size={25}/>
                            <div>Setting</div>
                        </div>
                        <div onClick={doLogout} className='flex cursor-pointer items-center gap-2'>
                            <BiLogOut size={25} color='red'/>
                            <div className='font-semibold text-red-500'>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard