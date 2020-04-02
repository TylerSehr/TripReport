import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router'
import axios from 'axios';

const ReadReport = props => {
    const initialState = { 
        title:'', 
        substance:'', 
        intensity: '',
        setting:'', 
        dosage:'', 
        summary:''}
    const [trip, setTrip] = useState(initialState)
    useEffect(() => {
        axios.get(`/api/trip/${props._id}`, trip)
        .then(res => {
            setTrip(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])
    return (
        <div>
            Read report 
            <h1>{trip.title}</h1>
            <h6>Substance: {trip.substance}</h6>
            <h6>Intensity: {trip.intensity}</h6>
            <h6>Setting: {trip.setting}</h6>
            <p>{trip.summary}</p>
            <Link to='/reports'>Back to reports</Link>
        </div>
    )
}
export default ReadReport;