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
        set: '',
        summary:'',
        insights: '',
        afterglow: ''
    }
    const [trip, setTrip] = useState(initialState)
    const [errors, setErrors] = useState([])
    const handleChange = (e) => {
        setTrip({
            ...trip,
            [e.target.name]: e.target.value
        })
        console.log(trip)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handlesubmit was hit')
        let newTrip = TripReport.buildTripReport(trip)
        axios.post('/api/submit-trip', newTrip)
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
                <input name='title' type='text' onChange={handleChange}/>
                <label>substance</label>
                <select onChange={handleChange} name='substance'>
                    <option value='other'>Other</option>
                    <option value='DMT'>DMT/Ayahuasca</option>
                    <option value='mescalin'>mescalin/peyote</option>
                    <option value='LSD'>LSD/acid</option>
                    <option value='psilocybin'>psilocybin/mushrooms</option>
                </select>
                <label>intensity</label>
                <select onChange={handleChange} name='intensity'>
                    <option value='light'>light</option>
                    <option value='moderate'>moderate</option>
                    <option value='heavy'>heavy</option>
                </select>
                <label>setting</label>
                <select onChange={handleChange} name='setting'>
                    <option value='other'>other</option>
                    <option value='private'>Private: indoors, few if any people around</option>
                    <option value='public'>Public: parties, festivals, grocery stores ect</option>
                    <option value='nature'>Nature</option>
                </select>
                <label>Dosage</label>
                <input name='dosage' type='text' onChange={handleChange}/>
                <label>set</label>
                <input name='set' onChange={handleChange} type='text'/>
                <label>Summary</label>
                <input name='summary' onChange={handleChange} type='text'/>
                <input type='submit'/>
                <label>insights</label>
                <input name='insights' onChange={handleChange} type='text'/>
                <label>Afterglow</label>
                <input name='afterglow' onChange={handleChange} type='text'/>
            </form>
        </div>
    )
}
export default MakeReport;