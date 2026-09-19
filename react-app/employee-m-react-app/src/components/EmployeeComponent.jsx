import React from 'react'

function EmployeeComponent() {
 
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the form data
        console.log('Form submitted:', { firstName, lastName, email });
    }

    const getFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const getLastName = (e) => {
        setLastName(e.target.value);
    }
    
    const getEmail = (e) => {
        setEmail(e.target.value);
    }

  return (
    <>
    <div className="container">
        <h1 className="text-center">Add Employee</h1>
        <form>
            <div className="form-group">
                <label className='text-left'>First Name</label>
                <input type="text" name='firstName' value={firstName} onChange={getFirstName} className="form-control" placeholder="Enter first name" />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name='lastName' value={lastName} onChange={getLastName} className="form-control" placeholder="Enter last name" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" name='email' value={email} onChange={getEmail} className="form-control" placeholder="Enter email" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>  
    </>
  )
}

export default EmployeeComponent