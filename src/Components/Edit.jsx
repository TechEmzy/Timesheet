import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { getScheduleFromLocalStorage, upDateScheduleInLocalStorage } from "../utils/localStorageManager";
import { calcDuration } from "../utils/calcDuration";


const Edit = () => {
    const { state } = useLocation()
    const scheduleId = state?.id;

    const [ name, setName ] = useState( "" );
    const [ gender, setGender ] = useState( "" );
    const [ taskTitle, setTaskTitle ] = useState( "" );
    const [ startTime, setStartTime ] = useState( "" );
    const [ endTime, setEndTime ] = useState( "" );
    const [ taskDescription, setTaskDescription ] = useState( "" );

    let navigate = useNavigate();


    const handleSubmit = ( event ) => {
        event.preventDefault();
        const payload = {
            id: scheduleId,
            name,
            gender,
            taskTitle,
            startTime,
            endTime,
            taskDescription,
            timeSpent: calcDuration( startTime, endTime )
        }
        upDateScheduleInLocalStorage( payload )
        navigate( "/" );
    }

    useEffect( () => {
        if ( !scheduleId ) return navigate( "/" );
        const foundData = getScheduleFromLocalStorage( scheduleId )
        if (foundData) {
            setName( foundData?.name || '');
            setGender( foundData?.gender   || '');
            setTaskTitle( foundData?.taskTitle   || '');
            setStartTime( foundData?.startTime   || '');
            setEndTime( foundData?.endTime  || '');
            setTaskDescription( foundData?.taskDescription || '');
        }

    }, [] );


    return (
        <div className="create">
            <h2>Update Employee's Data</h2>
            <form onSubmit={ handleSubmit }>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={ name }
                    onChange={ ( event ) => setName( event.target.value ) }
                />

                <label>Gender:</label>
                <select
                    value={ gender }
                    onChange={ ( event ) => setGender( event.target.value ) }
                >
                    <option value="Select Gender"> Select Gender </option>
                    <option value="Male"> Male </option>
                    <option value="Female"> Female </option>
                </select>

                <label>Task-title:</label>
                <input
                    type="text"
                    required
                    value={ taskTitle || "" }
                    onChange={ ( event ) => setTaskTitle( event.target.value ) }
                />

                <label>Start-time:</label>
                <input
                    type="time"
                    className="inputDate"
                    name="worked_start"
                    autoComplete="off"
                    required
                    value={ startTime }
                    onChange={ ( event ) => setStartTime( event.target.value ) }
                />

                <label>End-time:</label>
                <input
                    type="time"
                    className="inputDate"
                    name="worked_start"
                    autoComplete="off"
                    required
                    value={ endTime }
                    onChange={ ( event ) => setEndTime( event.target.value ) }
                />
                <label>Task-description:</label>
                <input
                    type="text"
                    required
                    value={ taskDescription || "" }
                    onChange={ ( event ) => setTaskDescription( event.target.value ) }
                />


                <button className="submit">Update</button>
            </form>
        </div>

    );
}

export default Edit;