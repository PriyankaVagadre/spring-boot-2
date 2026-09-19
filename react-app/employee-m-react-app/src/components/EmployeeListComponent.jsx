import React from 'react'
import { useState } from 'react';

function EmployeesList() {
    const [employees, setEmployees] = useState([
        { id: 1, firstName: 'Employee 1', lastName: 'Last Name 1', email: 'xyz@gmail.com' },
        { id: 2, firstName: 'Employee 2', lastName: 'Last Name 2', email: 'abc@gmail.com' },
        { id: 3, firstName: 'Employee 3', lastName: 'Last Name 3', email: 'pqr@gmail.com' },
    ]);
    return(
        <div>
            <h1 className="text-left">Employee Component</h1>
            <div className="container">
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