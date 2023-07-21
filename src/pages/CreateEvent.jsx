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

    const btnCreateEvent = async values => {
        setLoading(true);
        console.log(values)
        const form = new FormData();
        Object.keys(values).forEach(key => {
            form.append(key, values[key]);
        });
        if (selectedPicture) {
            form.append('picture', selectedPicture);
        }
        const {data} = await http(token).post('/events/manage', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setGetAllManage(data.results);
        setSuccessMessage('Create Events successfully');
        setLoading(false);
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
        const {data} = await http(token).patch(`/events/manage/${idEvent}`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(data.results);
        setGetAllManage(data.results);
        setSuccessMessage('Update Events successfully');
        setLoading(false);
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

    const updateEvent = async id => {
        setIdEvent(id);
    };

    return (
        <>
        <NavbarLogout />
    <main className="w-full flex max-sm:ml-[0]">
        <Dashboard />
        <section className="w-[70%] bg-white min-h-[100vh] max-md:min-h-[50vh] mt-12 rounded-xl max-lg:w-full">
            <div className="w-[90%] h-[80px] flex justify-between items-center mx-6">
                <h1 className="text-2xl font-semibold">Manage Event</h1>
                <div className="flex justify-center px-8 py-3 items-center rounded-md">
                    <label htmlFor='my_modal_6' className="text-xs font-bold tracking-wider btn">Create</label>
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
                    <label htmlFor="modalUpdate" className="btn bg-red-500 hover:bg-white hover:text-red-500">Close!</label>
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