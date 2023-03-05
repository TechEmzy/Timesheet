import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteScheduleInLocalStorage, readLocalStorage } from "../utils/localStorageManager";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  // Delete item from the timesheet table
  const handleDelete = (id) => {
    deleteScheduleInLocalStorage( id )
    setEmployees( readLocalStorage() )
  }

  useEffect( () => {
    setEmployees( readLocalStorage() )
  }, [])


  return (
    <div className="parent-div">
      <div className="header">
        <h1>Timesheet</h1>
      </div>

      <Link to="/create">
        <button className="create-button">Add Timesheet</button>
      </Link>

      <table>
        <thead>
          <tr className="table-heading">
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Task-Title</th>
            <th>Start-Time</th>
            <th>End-Time</th>
            <th>Time-Spent</th>
            <th>Task-Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees && employees.length > 0 ? employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.taskTitle}</td>
                  <td>{employee.startTime}</td>
                  <td>{employee.endTime}</td>
                  <td>{ employee.timeSpent }</td>
                  <td>{employee.taskDescription}</td>
                  <td>
                    <Link state={ { id: employee.id }} to={"/edit"}>
                      <button className="edit-button"> EDIT </button>
                    </Link>
                    &nbsp;
                    <button onClick={ () => handleDelete(employee.id)} className="delete-button"> DELETE </button>
                  </td>
                </tr>
              )
            })
              :
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          }
        </tbody>
      </table>
      <br></br>

    </div>

  );
}

export default Home;
