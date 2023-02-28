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
  const [timeDifference, setTimeDifference] = useState(""); // Add timeSpent state

  let navigate = useNavigate();

  // Calculate the time difference in minutes
  // const calcSpent = () => {
  //   const start = moment(startTime, "HH:mm");
  //   const end = moment(endTime, "HH:mm");
  //   const diff = end.diff(start);
  //   const duration = moment.duration(diff);
  //   const hours = Math.floor(duration.asHours());
  //   const minutes = duration.minutes();
  //   setTimeSpent(`${hours} : ${minutes}`)
  // }

  // Add item to the timesheet table
  const handleSubmit = (event) => {
    event.preventDefault();

    let ids = Employees.length + 1;

    let a = name,
      b = gender,
      c = taskTitle,
      d = startTime,
      e = endTime,
      g = taskDescription;

    // calcSpent(); // Call calcSpent() function

    Employees.push({
      id: ids,
      name: a,
      gender: b,
      taskTitle: c,
      startTime: d,
      endTime: e,
      timeDifference: timeDifference, // Add timeSpent to Employees array
      taskDescription: g,
    });

    
      const start = moment(startTime, 'HH:mm:ss');
      const end = moment(endTime, 'HH:mm:ss');
      const duration = moment.duration(end.diff(start));
      setTimeDifference(duration.asHours().toFixed(2));
    

    navigate("/");
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