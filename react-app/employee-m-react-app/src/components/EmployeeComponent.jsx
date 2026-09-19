import React from 'react'

function EmployeeComponent() {
  return (
    <>
    <div>EmployeeComponent</div>
    <div className="container">
        <h1 className="text-center">Add Employee</h1>
        <form>
            <div className="form-group">
                <label className='text-left'>First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name" />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>  
    </>
  )
}

export default EmployeeComponent