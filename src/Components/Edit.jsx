import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import {useNavigate} from 'react-router-dom';
import moment from "moment";


const Edit = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    // const [timeSpent, setTimeSpent] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    let navigate = useNavigate();

    // var index = Employees.map(function(event){
    //     return event.id
    // }).indexOf(id);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const index = Employees.findIndex((employee) => employee.id === id);
        const employee = Employees[index];
    
        // calculate the time difference
        const start = moment(startTime, "HH:mm");
        const end = moment(endTime, "HH:mm");
        const diff = end.diff(start);
        const duration = moment.duration(diff);
        const hours = Math.floor(duration.asHours());
        const minutes = duration.minutes();
    
        const updatedEmployee = {
          ...employee,
          name,
          gender,
          taskTitle,
          startTime,
          endTime,
          taskDescription,
          timeDifference: `${hours}:${minutes}`
        };
    
        Employees[index] = updatedEmployee;
    
        navigate("/");
    };

  useEffect(() => {
  const savedId = localStorage.getItem('id');
  setId(savedId || ''); // Set default value to an empty string if savedId is null or undefined
  setName(localStorage.getItem("name") || "");
  setGender(localStorage.getItem("gender") || "");
  setTaskTitle(localStorage.getItem("taskTitle") || "");
  setStartTime(localStorage.getItem("startTime") || "");
  setEndTime(localStorage.getItem("endTime") || "");
//   setTimeSpent(localStorage.getItem("timeSpent") || "");
  setTaskDescription(localStorage.getItem("taskDescription") || "");

}, []);


    return ( 
        <div className="create">
            <h2>Update Employee's Data</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type = "text"
                    required
                    value = {name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label>Gender:</label>
                <select
                    value = {gender}
                    onChange={(event) => setGender(event.target.value)}
                >
                    <option value ="Select Gender"> Select Gender </option>
                    <option value ="Male"> Male </option>
                    <option value ="Female"> Female </option>
                </select>

                <label>Task-title:</label>
                <input
                    type = "text"
                    required
                    value = {taskTitle}
                    onChange={(event) => setTaskTitle(event.target.value)}
                />

                <label>Start-time:</label>
                <input
                    type = "time"
                    className="inputDate"
                    // name="worked_start"
                    autoComplete="off"
                    required
                    value = {startTime}
                    onChange={(event) => setStartTime(event.target.value)}
                />

                <label>End-time:</label>
                <input
                    type = "time"
                    className="inputDate"
                    // name="worked_start"
                    autoComplete="off"
                    required
                    value = {endTime}
                    onChange={(event) => setEndTime(event.target.value)}
                />

                <label>Task-description:</label>
                <input
                    type = "text"
                    required
                    value = {taskDescription}
                    onChange={(event) => setTaskDescription(event.target.value)}
                />
                

                <button className="submit">Update</button>
            </form>
        </div>

     );
}
 
export default Edit;



    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const index = Employees.findIndex((employee) => employee.id === id);
    //     const employee = Employees[index];

    //     // let a = Employees[index];
    //     employee.name = name;
    //     employee.gender = gender;
    //     employee.taskTitle = taskTitle;
    //     employee.startTime = startTime;
    //     employee.endTime = endTime;
    //     employee.timeSpent = timeSpent;
    //     employee.taskDescription = taskDescription;

    //     navigate("/");
    // }