import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ViewReports = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get('/api/trips', trips)
        .then(res => {
            setTrips(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])

    return (
        <div>
            <Link to='/reports/compose'>compose</Link>
            {
                trips.map((trip, idx) =>{
                    return(
                        <div key={idx}>
                            <h2>{trip.title}</h2>
                            <span>{trip.substance}</span>
                            <span>{trip.intensity}</span>
                            <span>{trip.setting}</span>
                            <Link to={`reports/${trips._id}`}>Read More</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ViewReports;