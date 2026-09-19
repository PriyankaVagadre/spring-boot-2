import React, { useEffect } from 'react'
import { useState } from 'react';
import { deleteEmployee, getEmployees, updateEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function EmployeesList() {
    const [employees, setEmployees] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
       getEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => {
            console.error('Error fetching employees:', error);
        });
    }, []);

    const addEmployee = () => {
        // Logic to add a new employee
        console.log('Add Employee button clicked');
        navigate('/add');
    }

    function updateEmployeeHandler(employeeId) {
        navigate(`/edit/${employeeId}`);
    }

    function deleteEmployeeById(employeeId) {
        deleteEmployee(employeeId)
            .then(response => {
                console.log('Employee deleted successfully:', response.data);
                // Update the employees state to remove the deleted employee
                setEmployees(employees.filter(employee => employee.id !== employeeId));
            })
            .catch(error => {
                console.error('Error deleting employee:', error);
            });
    }

    return(
        <div>
            <h1 className="text-left">Employee Component</h1>
            <div className="container">
                <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
                <div className="row">
                    <div className="col-md-4">
                        {
                            employees.map(employee => (
                                <div className="card" key={employee.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
                                        <p className="card-text">{employee.email}</p>
                                        <button onClick={()=> updateEmployeeHandler(employee.id)} className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger" onClick={()=> deleteEmployeeById(employee.id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EmployeesList;