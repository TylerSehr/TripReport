import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ViewReports = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get('/api/trips', trips)
        .then(res => {
            console.log(res.data)
            setTrips(res.data)
            console.log(trips)
        })
        .catch(err => console.log(err.response))
    }, [])

    return (
        
        <div>
            <Link to='/reports/compose'>compose</Link>
            {
                trips.map((trip, idx) =>{
                    console.log(trip);
                    
                    return(
                        <div key={idx}>
                            <h2>{trip.trip.title}</h2>
                            <span>{trip.trip.substance}</span>
                            <span>{trip.trip.intensity}</span>
                            <span>{trip.trip.setting}</span>
                            <Link to={`${idx}`}>Read More</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ViewReports;