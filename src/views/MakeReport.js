import React, {useState} from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import TripReport from '../classes/trip-report.class'

const MakeReport = () => {
    const initialState = { 
        title:'', 
        substance:'', 
        intensity: '',
        setting:'', 
        dosage:'', 
        summary:''}
    const [trip, setTrip] = useState(initialState)
    const [errors, setErrors] = useState([])
    const handleChange = (e) => {
        console.log(trip)
        setTrip({
            ...trip,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handlesubmit was hit')
        trip = TripReport.buildTripReport(trip)
        axios.post('/api/submit-trip', trip)
        .then(res => {
            console.log(res.data)
            navigate('/reports')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }) 
    }
    return (
        <div>
            <Link to='/reports'>Back to reports</Link>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Title</label>
                <input name='title' type='text'/>
                <label>substance</label>
                <select onChange={e => handleChange(e)} name='substance'>
                    <option value='other'>Other</option>
                    <option value='DMT'>DMT/Ayahuasca</option>
                    <option value='mescalin'>mescalin/peyote</option>
                    <option value='LSD'>LSD/acid</option>
                    <option value='psilocybin'>psilocybin/mushrooms</option>
                </select>
                <label>intensity</label>
                <select onChange={e => handleChange(e)} name='intensity'>
                    <option value='light'>light</option>
                    <option value='moderate'>moderate</option>
                    <option value='heavy'>heavy</option>
                </select>
                <label>setting</label>
                <select onChange={e => handleChange(e)} name='setting'>
                    <option value='other'>other</option>
                    <option value='private'>Private: indoors, few if any people around</option>
                    <option value='public'>Public: parties, festivals, grocery stores ect</option>
                    <option value='nature'>Nature</option>
                </select>
                <label>Dosage</label>
                <input name='dosage' type='text'/>
                <label name='summary' type='text'>Summary</label>
                <input type='submit'/>
            </form>
        </div>
    )
}
export default MakeReport;