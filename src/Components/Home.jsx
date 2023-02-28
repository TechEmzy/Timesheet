import React, { useState } from "react";
import Employees from "./Employees";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [employees, setEmployees] = useState(Employees);
  const navigate = useNavigate();

  // Delete item from the timesheet table
  const handleDelete = (id) => {
    const filteredEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(filteredEmployees);
    navigate('/');
  }

  // Edit or update item from the timesheet table
  const handleEdit = (id, name, gender, taskTitle, startTime, endTime, timeDifference, taskDescription) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('taskTitle', taskTitle);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('endTime', endTime);
    localStorage.setItem('timeDifference', timeDifference);
    localStorage.setItem('taskDescription', taskDescription);
  }


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
                  <td>{employee.timeDifference}</td>
                  <td>{employee.taskDescription}</td>
                  <td>
                    <Link to={"/edit"}>
                      <button className="edit-button" onClick={() => handleEdit(employee.id, employee.name, employee.gender, employee.taskTitle, employee.startTime, employee.endTime, employee.taskDescription)}> EDIT </button>
                    </Link>
                    &nbsp;
                    <button className="delete-button" onClick={() => handleDelete(employee.id)}> DELETE </button>
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
