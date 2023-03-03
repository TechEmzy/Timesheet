import React, { useState } from "react";
import Employees from "./Employees";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Create = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  let navigate = useNavigate();

  const handleSubmit = ( event ) => {
    event.preventDefault();
    
    //calculate the time difference
    const start = moment( startTime, "HH:mm" );
    const end = moment( endTime, "HH:mm" );
    const diff = end.diff( start );
    const duration = moment.duration( diff );
    const hours = Math.floor( duration.asHours() );
    const minutes = duration.minutes();

    const payload = {
      id: Employees.length + 1,
      name,
      gender,
      taskTitle,
      startTime,
      endTime,
      taskDescription,
      timeDifference: `${hours}hrs:${minutes}mins`
    }
    Employees.push( payload );
    navigate( "/" );
  };

  return (
    <div className="create">
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Gender:</label>
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="Select Gender"> Select Gender </option>
          <option value="Male"> Male </option>
          <option value="Female"> Female </option>
        </select>
       
        <label>Task-title:</label>
        <input
          type="text"
          required
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />

        <label>Start-time:</label>
        <input
          type="time"
          className="inputDate"
          // name="worked_start"
          autoComplete="off"
          required
          value={startTime}
          onChange={(event) => setStartTime(event.target.value)}
        />

        <label>End-time:</label>
        <input
          type="time"
          className="inputDate"
          // name="worked_start"
          autoComplete="off"
          required
          value={endTime}
          onChange={(event) => setEndTime(event.target.value)}
        />

        <label>Task-description:</label>
        <input
          type="text"
          required
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
        />
                
        <button className="submit">Submit</button>

            </form>
        </div>

     );
}
 
export default Create;