import Vector8 from '../assets/vector8.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout as logoutAction } from "../redux/reducers/auth"

const Logout = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const doLogout = ()=> {
        window.localStorage.removeItem('token')
        dispatch(logoutAction())
        navigate('/login')
    }

    return (
        <button onClick={doLogout} className="flex items-center font-semibold">
            <img src={Vector8} className="w-[18px] h-[16px]" />
            <h3 className="ml-6">Logout</h3>
        </button>
    )
}

export default Logout