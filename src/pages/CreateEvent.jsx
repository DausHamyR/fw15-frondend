// import Avatar from '../assets/Avatar.png'
import coklat from '../assets/coklat.png'
import Vector from '../assets/Vector.png'
import tambahBiru from '../assets/tambah biru.png'
import Vector1 from '../assets/Vector (1).png'
import Vector4 from '../assets/Vector (4).png'
import Vector5 from '../assets/Vector (5).png'
import Vector6 from '../assets/Vector (6).png'
import Vector7 from '../assets/Vector (7).png'
import { Link } from "react-router-dom"
import Logout from '../components/Logout'
import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import http from '../helpers/http.helper'
import moment from "moment"
import { Formik } from 'formik'
import NavbarLogout from '../components/NavbarLogout'

const CreateEvent = ()=> {
    const [getAllmanage, setGetAllManage] = useState([])
    const [profile, setProfile] = useState({})
    const token = useSelector(state => state.auth.token)
    const [selectedPicture, setSelectedPicture] = useState('');
    const [getManageEvent, setGetManageEvent] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const [idEvent, setIdEvent] = useState();

    const btnCreateEvent = async values => {
        // setLoading(true);
        const form = new FormData();
        Object.keys(values).forEach(key => {
            if (values[key]) {
                if (key === 'price') {
                const priceId = (values.price = 3);
                form.append('price', priceId);
                } else if (key === 'location') {
                const cityId = (values.location = 5);
                form.append('location', cityId);
                } else if (key === 'category') {
                const categoryId = (values.category = 3);
                form.append('category', categoryId);
                } else {
                form.append(key, values[key]);
                }
            }
        });
        if (selectedPicture) {
            form.append('picture', selectedPicture);
        }
        const {data} = await http(token).post('/events/manage', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data.results);
        setGetManageEvent(data.results);
        setSuccessMessage('Create Events successfully');
        <div className='modal-actions'>
            <label htmlFor="my_modal_6"></label>
        </div>
    };

    const btnUpdateEvent = async values => {
        // setLoading(true);
        const form = new FormData();
        Object.keys(values).forEach(key => {
            if (values[key]) {
                if (key === 'price') {
                const priceId = (values.price = 2);
                form.append('price', priceId);
                } else if (key === 'location') {
                const cityId = (values.location = 2);
                form.append('location', cityId);
                } else if (key === 'category') {
                const categoryId = (values.category = 2);
                form.append('category', categoryId);
                } else {
                form.append(key, values[key]);
                }
            }
        });
        if (selectedPicture) {
            form.append('picture', selectedPicture);
        }
        const {data} = await http(token).patch(`/events/manage/${idEvent}`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data.results);
        setGetManageEvent(data.results);
        setSuccessMessage('Update Events successfully');
    };

    async function removeEvent(id) {
        try {
            await http(token).delete(`/events/manage/${id}`);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getProfile = async() => {
            const {data} = await http(token).get('/profile')
            setProfile(data.results)
        }
        getProfile()
    }, [token])

    useEffect(() => {
        const manageEvent = async () => {
            try {
                const {data} = await http(token).get('/events/manage');
                setGetAllManage(data.results);
            } catch (err) {
                console.log(err);
            }
        };
        manageEvent();
    }, [token, getAllmanage]);

    const updateEvent = async id => {
        setIdEvent(id);
    };

    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <section className="w-[25%] min-h-[825px] mt-12 max-md:hidden">
            <div className="flex justify-center">
            {profile?.picture && <img className='w-12 rounded-full border-2 border-blue-500 p-1' src={profile.picture.startsWith('https')?profile.picture : `http://localhost:8888/uploads/${profile.picture}`} />}
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
                    <img src={coklat} className="w-[18.75px] h-[18.75px]" />
                    <h3 className="ml-6">Edit Profile</h3>
                </Link>
                <Link to='/change-password' className="flex items-center font-semibold ml-12">
                    <img src={Vector4} className="w-[16px] h-[20px]" />
                    <h3 className="ml-6">Change Password</h3>
                </Link>
                <Link to='/create-event' className="flex items-center font-semibold">
                    <img src={tambahBiru} className="w-[20px] h-[20px]" />
                    <h3 className="ml-6 text-blue-500">Create Event</h3>
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
                <Logout />
            </div>
        </section>
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-md:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">Manage Event</h1>
                <div className="flex justify-center px-8 py-3 items-center rounded-md">
                    <label htmlFor='my_modal_6' className="text-xs font-bold tracking-wider btn">Create</label>
                </div>
            </div>
            <div className="w-[80%] h-[80%] mt-10 ml-16 max-sm:ml-4">
                {getAllmanage.map(history => (
                <div key={`history-list-${history.id}`} className="flex mb-12">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">{moment(history.date).format('DD')}</p>
                        <p className="text-slate-400">{moment(history.date).format('dddd')}</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">{history.title}</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">{history.location}</p>
                            <p className="text-slate-400 mb-1">{moment(history.date).format('DD-MM-YYYY')}</p>
                            <div className="flex">
                                <label htmlFor={`my-modal-${history.id}`} className="cursor-pointer text-blue-600 font-semibold mr-4">Detail</label>
                                <input type="checkbox" id={`my-modal-${history.id}`} className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor={`my-modal-${history.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Detail Events!</h3>
                                <p className="py-2">{history.id}</p>
                                <p className="py-2">{history.title}</p>
                                <p className="py-2">{history.name}</p>
                                <p className="py-2">{moment(history.date).format('DD-MM-YYYY')}</p>
                                <p className="py-2">{history.descriptions}</p>
                            </div>
                            </div>
                                <label htmlFor="modalUpdate" onClick={() => updateEvent(history.id)} className="cursor-pointer text-blue-600 font-semibold mr-4">Update</label>
                                <button onClick={()=> removeEvent(history.id)}  className="text-blue-600 font-semibold">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </main>
    <Footer />
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box min-w-[30%]">
    <div>
        <div className='font-bold text-xl mb-8'>
            Create Event
        </div>
        <Formik
        initialValues={{
            name: '',
            location: '',
            price: '',
            category: '',
            date:  '',
            picture: '',
            detail: ''
        }}
        onSubmit={btnCreateEvent}
        enableReinitialize
    >
        {({handleSubmit, handleChange, handleBlur, values})=> (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Name</div>
                    <input name='name' type="text" placeholder='Input Name Event' className="input input-bordered w-full max-w-xs" 
                    onChange={handleChange} onBlur={handleBlur} value={values.name} />
                </div>
                <div>
                    <div className='mb-2'>Category</div>
                    <input name='category' type="text" placeholder='Select Location' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.category}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Location</div>
                    <input name='location' type="text" placeholder='Select Location' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.location}/>
                </div>
                <div>
                    <div className='mb-2'>Date Time Show</div>
                    <input name='date' type="date" placeholder='Input Price' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.date}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Price</div>
                    <input name='price' type="text" placeholder='Input Price' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.price}/>
                </div>
                <div>
                    <div className='mb-2'>Image</div>
                    <input name='picture' type="file" placeholder='Chose File ...' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.picture}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Detail</div>
                    <input name='detail' type="text" placeholder='Input Detail' className="input input-bordered min-w-[465px]"  onChange={handleChange} onBlur={handleBlur} value={values.detail} />
                </div>
            </div>
            <div className='flex justify-end gap-6 items-end'>
                <div className='bg-green-600 w-20 h-12 rounded-md flex justify-center items-center'>
                    <button className='text-white'>Create</button>
                </div>
                <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn bg-red-500 hover:bg-white hover:text-red-500">Close!</label>
                </div>
            </div>
        </form>
        )}
        </Formik>
    </div>
  </div>
</div>
    <input type="checkbox" id="modalUpdate" className="modal-toggle" />
<div className="modal">
  <div className="modal-box min-w-[30%]">
    <div>
        <div className='font-bold text-xl mb-8'>
            Update Event
        </div>
        <Formik
        initialValues={{
            name: '',
            location: '',
            price: '',
            category: '',
            date:  '',
            picture: '',
            detail: ''
        }}
        onSubmit={btnUpdateEvent}
        enableReinitialize
    >
        {({handleSubmit, handleChange, handleBlur, values})=> (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Name</div>
                    <input name='name' type="text" placeholder='Input Name Event' className="input input-bordered w-full max-w-xs" 
                    onChange={handleChange} onBlur={handleBlur} value={values.name} />
                </div>
                <div>
                    <div className='mb-2'>Category</div>
                    <input name='category' type="text" placeholder='Select Location' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.category}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Location</div>
                    <input name='location' type="text" placeholder='Select Location' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.location}/>
                </div>
                <div>
                    <div className='mb-2'>Date Time Show</div>
                    <input name='date' type="date" placeholder='Input Price' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.date}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Price</div>
                    <input name='price' type="text" placeholder='Input Price' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.price}/>
                </div>
                <div>
                    <div className='mb-2'>Image</div>
                    <input name='picture' type="file" placeholder='Chose File ...' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.picture}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-2'>Detail</div>
                    <input name='detail' type="text" placeholder='Input Detail' className="input input-bordered min-w-[465px]"  onChange={handleChange} onBlur={handleBlur} value={values.detail} />
                </div>
            </div>
            <div className='flex justify-end gap-6 items-end'>
                <div className='bg-blue-600 w-20 h-12 rounded-md flex justify-center items-center'>
                    <button className='text-white'>Update</button>
                </div>
                <div className="modal-action">
                    <label htmlFor="modalUpdate" className="btn bg-red-500 hover:bg-white hover:text-red-500">Close!</label>
                </div>
            </div>
        </form>
        )}
        </Formik>
    </div>
  </div>
</div>
    </>
    )
}

export default CreateEvent