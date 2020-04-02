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
                            <h2>{trip.title}</h2>
                            <span>{trip.substance.substance}</span>
                            <span>{trip.substance.dosage}</span>
                            <span>{trip.description.intensity}</span>
                            <span>{trip.setting}</span>
                            <Link to={`/reports/${idx}`}>Read More</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ViewReports;