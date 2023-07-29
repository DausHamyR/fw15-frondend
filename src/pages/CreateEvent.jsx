import Footer from "../components/Footer"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import http from '../helpers/http.helper'
import moment from "moment"
import { Formik } from 'formik'
import NavbarLogout from '../components/NavbarLogout'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import Dashboard from '../components/Dashboard'

const CreateEvent = ()=> {
    const [getAllmanage, setGetAllManage] = useState([])
    const token = useSelector(state => state.auth.token)
    const [selectedPicture, setSelectedPicture] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [idEvent, setIdEvent] = useState();
    const [loading, setLoading] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Category');
    const [valuesCategory, setValuesCategory] = useState();
    const [selectedLocation, setSelectedLocation] = useState('Select Location');
    const [valuesLocation, setValuesLocation] = useState();
    const [selectedPrice, setSelectedPrice] = useState('Select Price');
    const [valuesPrice, setValuesPrice] = useState();
    const [showModalCreateEvent, setShowModalCreateEvent] = useState(false);
    const [showModalUpdateEvent, setShowModalUpdateEvent] = useState(false);
    const [indexEvent, setIndexEvent] = useState();

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOptionClick = (option, id) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        setValuesCategory(id)
    };

    const handleLocation = (option, id) => {
        setSelectedLocation(option);
        setIsDropdownOpen(false);
        setValuesLocation(id)
    };

    const handlePrice = (option, id) => {
        setSelectedPrice(option);
        setIsDropdownOpen(false);
        setValuesPrice(id)
    };

    const btnCreateEvent = async values => {
        setLoading(true);
        const form = new FormData();
        Object.keys(values).forEach(key => {
            form.append(key, values[key]);
        });
        if (selectedPicture) {
            form.append('picture', selectedPicture);
        }
        if (valuesCategory) {
            form.append('category', valuesCategory);
        }
        if (valuesLocation) {
            form.append('location', valuesLocation);
        }
        if (valuesPrice) {
            form.append('price', valuesPrice);
        }
        form.forEach((value, key) => {
            console.log(value)
        })
        const {data} = await http(token).post('/events/manage', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setGetAllManage(data.results);
        setSuccessMessage('Create Events successfully');
        setLoading(false);
        setShowModalCreateEvent(false)
    };

    const btnUpdateEvent = async values => {
        setLoading(true);
        const form = new FormData();
        Object.keys(values).forEach(key => {
            form.append(key, values[key]);
        });
        if (selectedPicture) {
            form.append('picture', selectedPicture);
        }
        if (valuesCategory) {
            form.append('category', valuesCategory);
        }
        if (valuesLocation) {
            form.append('location', valuesLocation);
        }
        if (valuesPrice) {
            form.append('price', valuesPrice);
        }
        const {data} = await http(token).patch(`/events/manage/${idEvent}`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setGetAllManage(data.results);
        setSuccessMessage('Update Events successfully');
        setLoading(false);
        setShowModalUpdateEvent(false)
    };

    async function removeEvent(id) {
        try {
            await http(token).delete(`/events/manage/${id}`);
        } catch (err) {
            console.log(err);
        }
    }

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

    useEffect(() => {
        if(successMessage){
            const timeout = setTimeout(() => {
                setSuccessMessage('');
                }, 3000);
                return () => clearTimeout(timeout);
        }
    }, [successMessage]);

    // useEffect(() => {
    //     console.log(getAllmanage[indexEvent]?.title)
    // }, [indexEvent, getAllmanage]);

    const updateEvent = async id => {
        setIdEvent(id);
        const getid = getAllmanage.map(getId => getId.id)
        const a = getid.indexOf(id)
        setIndexEvent(a)
        setShowModalUpdateEvent(true)
    };

    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <Dashboard />
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-lg:w-full">
            <h1 className="text-xl font-semibold text-green-700">{successMessage}</h1>
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">Manage Event</h1>
                <div className="flex justify-center px-8 py-3 items-center rounded-md">
                    <label htmlFor='my_modal_6' onClick={()=> setShowModalCreateEvent(true)} className="text-xs font-bold tracking-wider btn">Create</label>
                </div>
            </div>
            <div className="w-[80%] h-[80%] mt-10 ml-16 max-sm:ml-4">
                {getAllmanage.map(history => (
                <div key={`history-list-${history?.id}`} className="flex mb-12">
                    <div className="grid content-start justify-items-center mr-8">
                        <p className="text-orange-500 font-medium">{moment(history?.date).format('DD')}</p>
                        <p className="text-slate-400">{moment(history?.date).format('dddd')}</p>
                    </div>
                    <div className="grid content-start">
                        <h1 className="font-bold text-2xl">{history?.title}</h1>
                        <div className="mt-4">
                            <p className="text-slate-400 mb-1">{history?.location}</p>
                            <p className="text-slate-400 mb-1">{moment(history?.date).format('DD-MM-YYYY')}</p>
                            <div className="flex">
                                <label htmlFor={`my-modal-${history?.id}`} className="cursor-pointer text-blue-600 font-semibold mr-4">Detail</label>
                                <input type="checkbox" id={`my-modal-${history?.id}`} className="modal-toggle" />
                            <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor={`my-modal-${history?.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">Detail Events!</h3>
                                <p className="py-2">{history?.id}</p>
                                <p className="py-2">{history?.title}</p>
                                <p className="py-2">{history?.name}</p>
                                <p className="py-2">{moment(history?.date).format('DD-MM-YYYY')}</p>
                                <p className="py-2">{history?.descriptions}</p>
                            </div>
                            </div>
                                <label htmlFor="modalUpdate" onClick={() => updateEvent(history?.id)} className="cursor-pointer text-blue-600 font-semibold mr-4">Update</label>
                                <button onClick={()=> removeEvent(history?.id)}  className="text-blue-600 font-semibold">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </main>
    <Footer />
    <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={showModalCreateEvent} />
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
                <div className="w-1/2">
                    <div className='mb-5'>Category</div>
                    <div className="dropdown">
                        <label onClick={toggleDropdown} tabIndex={0} className="py-[12px] pl-[10px] pr-[100px] border-2 rounded-md">{selectedOption}</label>
                        {isDropdownOpen && (
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handleOptionClick('Music', 1)}>Music</a></li>
                            <li><a onClick={() => handleOptionClick('Arts', 2)}>Arts</a></li>
                            <li><a onClick={() => handleOptionClick('Outdoors', 3)}>Outdoors</a></li>
                            <li><a onClick={() => handleOptionClick('Workshop', 4)}>Workshop</a></li>
                            <li><a onClick={() => handleOptionClick('Sport', 5)}>Sport</a></li>
                            <li><a onClick={() => handleOptionClick('Festival', 6)}>Festival</a></li>
                            <li><a onClick={() => handleOptionClick('Fashion', 7)}>Fashion</a></li>
                        </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-5'>Location</div>
                    <div className="dropdown">
                        <label onClick={toggleDropdown} tabIndex={0} className="py-[12px] pl-[10px] pr-[100px] border-2 rounded-md">{selectedLocation}</label>
                        {isDropdownOpen && (
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handleLocation('Bandung', 1)}>Bandung</a></li>
                            <li><a onClick={() => handleLocation('Jakarta', 2)}>Jakarta</a></li>
                            <li><a onClick={() => handleLocation('Aceh', 3)}>Aceh</a></li>
                            <li><a onClick={() => handleLocation('Solo', 4)}>Solo</a></li>
                            <li><a onClick={() => handleLocation('Bali', 5)}>Bali</a></li>
                            <li><a onClick={() => handleLocation('Jogyakarta', 6)}>Jogyakarta</a></li>
                            <li><a onClick={() => handleLocation('Semarang', 7)}>Semarang</a></li>
                        </ul>
                        )}
                    </div>
                </div>
                <div>
                    <div className='mb-2'>Date Time Show</div>
                    <input name='date' type="date" placeholder='Input Price' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.date}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-5'>Price</div>
                    <div className="dropdown">
                        <label onClick={toggleDropdown} tabIndex={0} className="py-[12px] pl-[10px] pr-[30px] border-2 rounded-md">{selectedPrice}</label>
                        {isDropdownOpen && (
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handlePrice('$15', 1)}>$15</a></li>
                            <li><a onClick={() => handlePrice('$30', 2)}>$30</a></li>
                            <li><a onClick={() => handlePrice('$50', 3)}>$50</a></li>
                        </ul>
                        )}
                    </div>
                </div>
                <div>
                    <div className='mb-2'>Image</div>
                    <input name='picture' type="file" placeholder='Chose File ...' className="input input-bordered w-full max-w-xs"  onChange={(e)=>setSelectedPicture(e.target.files[0])} onBlur={handleBlur} value={values.picture}/>
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
                    <button type="submit" className='text-white'>Create</button>
                </div>
                <div className="modal-action">
                    <label onClick={()=> setShowModalCreateEvent(false)} htmlFor="my_modal_6" className="btn bg-red-500 hover:bg-white hover:text-red-500">Close!</label>
                </div>
            </div>
        </form>
        )}
        </Formik>
    </div>
  </div>
</div>
    <input type="checkbox" id="modalUpdate" className="modal-toggle" checked={showModalUpdateEvent} />
<div className="modal">
  <div className="modal-box min-w-[30%]">
    <div>
        <div className='font-bold text-xl mb-8'>
            Update Event
        </div>
        <Formik
        initialValues={{
            name: getAllmanage[indexEvent]?.title,
            location: '',
            price: '',
            category: '',
            date:  moment(getAllmanage[indexEvent]?.date).format('YYYY-MM-DD'),
            detail: getAllmanage[indexEvent]?.descriptions
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
                    <div className='mb-5'>Category</div>
                    <div className="dropdown">
                        <label onClick={toggleDropdown} tabIndex={0} className="py-[12px] pl-[10px] pr-[100px] border-2 rounded-md">{selectedOption}</label>
                        {isDropdownOpen && (
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handleOptionClick('Music', 1)}>Music</a></li>
                            <li><a onClick={() => handleOptionClick('Arts', 2)}>Arts</a></li>
                            <li><a onClick={() => handleOptionClick('Outdoors', 3)}>Outdoors</a></li>
                            <li><a onClick={() => handleOptionClick('Workshop', 4)}>Workshop</a></li>
                            <li><a onClick={() => handleOptionClick('Sport', 5)}>Sport</a></li>
                            <li><a onClick={() => handleOptionClick('Festival', 6)}>Festival</a></li>
                            <li><a onClick={() => handleOptionClick('Fashion', 7)}>Fashion</a></li>
                        </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-5'>Location</div>
                        <div className="dropdown">
                            <label onClick={toggleDropdown} tabIndex={0} className="py-[12px] pl-[10px] pr-[100px] border-2 rounded-md" value={getAllmanage[indexEvent]?.name}>{selectedLocation}</label>
                            {isDropdownOpen && (
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={() => handleLocation('Bandung', 1)}>Bandung</a></li>
                                <li><a onClick={() => handleLocation('Jakarta', 2)}>Jakarta</a></li>
                                <li><a onClick={() => handleLocation('Aceh', 3)}>Aceh</a></li>
                                <li><a onClick={() => handleLocation('Solo', 4)}>Solo</a></li>
                                <li><a onClick={() => handleLocation('Bali', 5)}>Bali</a></li>
                                <li><a onClick={() => handleLocation('Jogyakarta', 6)}>Jogyakarta</a></li>
                                <li><a onClick={() => handleLocation('Semarang', 7)}>Semarang</a></li>
                            </ul>
                            )}
                        </div>
                    </div>
                <div>
                    <div className='mb-2'>Date Time Show</div>
                    <input name='date' type="date" placeholder='Input Price' className="input input-bordered w-full max-w-xs"  onChange={handleChange} onBlur={handleBlur} value={values.date}/>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div>
                    <div className='mb-5'>Price</div>
                    <div className="dropdown">
                        <label onClick={toggleDropdown} tabIndex={0} className="py-[12px] pl-[10px] pr-[30px] border-2 rounded-md">{selectedPrice}</label>
                        {isDropdownOpen && (
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handlePrice('$15', 1)}>$15</a></li>
                            <li><a onClick={() => handlePrice('$30', 2)}>$30</a></li>
                            <li><a onClick={() => handlePrice('$50', 3)}>$50</a></li>
                        </ul>
                        )}
                    </div>
                </div>
                <div>
                    <div className='mb-2'>Image</div>
                    <input name='picture' type="file" placeholder='Chose File ...' className="input input-bordered w-full max-w-xs"  onChange={(e)=>setSelectedPicture(e.target.files[0])} onBlur={handleBlur} value={values.picture}/>
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
                    <button type="submit" className='text-white'>Update</button>
                </div>
                <div className="modal-action">
                    <label onClick={()=> setShowModalUpdateEvent(false)} htmlFor="modalUpdate" className="btn bg-red-500 hover:bg-white hover:text-red-500">Close!</label>
                </div>
            </div>
        </form>
        )}
        </Formik>
    </div>
  </div>
</div>
    <input type="checkbox" id="loading" className="modal-toggle" checked={loading}/>
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

export default CreateEvent