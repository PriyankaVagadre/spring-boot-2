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
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Employee 1</h5>
                                <p className="card-text">This is employee 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Employee 2</h5>
                                <p className="card-text">This is employee 2.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Employee 3</h5>
                                <p className="card-text">This is employee 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
