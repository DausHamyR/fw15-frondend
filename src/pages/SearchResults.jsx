import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import http from "../helpers/http.helper";
import { Link } from "react-router-dom";
import moment from "moment";
import NavbarLogout from '../components/NavbarLogout'
import Footer from "../components/Footer"

const SearchResults = ()=> {
    const [searchParams] = useSearchParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=> {
        const getEventBySearch = async ()=> {
            const {data} = await http().get('/events', {params: searchParams})
            setSearchResults(data.results)
        }
        getEventBySearch()
    }, [searchParams])

    return(
        <div>
            <NavbarLogout />
            {searchResults.length > 0 && (
            <div className="text-center font-bold  text-3xl">Result of &quot;{searchParams.get('search')}&quot; in Events!</div>
        )}
            <section className="w-full flex flex-wrap justify-evenly">
        {searchResults.map(event => {
            return (
        <Link to={`/events/${event.id}`} className="w-[200px]" key={`eventDetails-${event.id}`} >
            <img className="h-[270px] object-cover rounded-2xl filter brightness-75" src={`http://localhost:8888/uploads/${event.picture}`} />
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