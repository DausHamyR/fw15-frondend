import React from 'react'
import http from '../helpers/http.helper';
import { Formik } from 'formik';
import {BiSearch} from 'react-icons/bi'

function Tes() {
    const [getAllUser, setGetAllUser] = React.useState([])
    const [search, setSearch] = React.useState("")

    const onSearch = (values)=> {
        setSearch(values.search)
    }

    React.useEffect(() => {
        const getUser = async () => {
            try {
                const {data} = await http().get(`/user1?search=${search}`);
                setGetAllUser(data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [search]);

    return (
        <div>
            <div className='flex flex-col gap-6 justify-center items-center h-screen'>
                <Formik
                    initialValues={
                        {search: ''}
                    } 
                    onSubmit={onSearch}>
                    {({handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit} className="flex relative items-center max-w-[500px] w-full">
                            <input name='search' type="text" placeholder='Search Event' className='input input-bordered w-full' onChange={handleChange} onBlur={handleBlur} />
                            <button type="submit">
                                <BiSearch size={40} className="absolute right-4 top-[5px] text-slate-400"/>
                            </button>
                        </form>
                    )}
                    </Formik>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th> 
                            <th>IsMarried</th>
                            <th>programmingLanguages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllUser.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td> 
                            <td>{(user.isMarried).toString()}</td>
                            <td>{user.programmingLanguages}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tes