import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

const HomeEvent = ()=> {
    const [events, setEvents] = useState([])
    useEffect(()=> {
        async function getData(){
            const {data} = await axios.get('http://localhost:8888/events')
            console.log(data)
            // setEvents(data.results)
        }
        getData()
    }, [])
    return (
        <div>
            {/* {JSON.stringify(events)} */}
            {events.map(event => {
                return (
                    <div key={event.id}>
                        <img src={`http://localhost:8888/uploads/${event.picture}`} />
                        <div>{moment(event.date).format('DD-MM-YYYY')}</div>
                        <div>{event.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeEvent