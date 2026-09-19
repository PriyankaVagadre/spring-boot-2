import React, { useEffect } from 'react'
import { useState } from 'react';
import { getEmployees } from '../services/EmployeeService';
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