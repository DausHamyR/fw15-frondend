import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import http from "../helpers/http.helper";
import { Link } from "react-router-dom";
import moment from "moment";
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"
import { useSelector } from "react-redux";

const SearchResults = ()=> {
    const [searchParams] = useSearchParams()
    const [searchResults, setSearchResults] = useState([])
    const token = useSelector(state => state.auth.token)

    useEffect(()=> {
        const getEventBySearch = async ()=> {
            const {data} = await http(token).get('/events', {params: searchParams})
            console.log(data)
            setSearchResults(data.results)
        }
        getEventBySearch()
    }, [searchParams, token])

    useEffect(()=> {
        console.log(searchResults)
    }, [searchResults])

    return(
        <div>
            <NavbarLogout />
            {searchResults.length > 0 && (
            <div className="text-center font-bold text-3xl mb-8">Result of &quot;{searchParams.get('search')}&quot; in Events!</div>
        )}
            <section className="w-full flex flex-wrap justify-evenly gap-6">
                {searchResults.map(event => {
                    return (
                    <Link to={`/events/${event.id}`} className="w-[300px]" key={`eventDetails-${event.id}`} >
                        <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={event.picture} />
                        <div className="relative top-[-80px] left-[5px] text-white">
                            <h1 className="text-xs">{moment(event.date).format('DD-MM-YYYY')}</h1>
                            <h1 className="text-xl font-bold">{event.title}</h1>
                        </div>
                    </Link>
                    )
                })}
            </section>
        {searchResults.length < 1 && (
            <div className="text-center font-bold  text-3xl">Event &quot;{searchParams.get('search')}&quot; Not Found!</div>
        )}
        <Footer />
        </div>
    )
}

export default SearchResults