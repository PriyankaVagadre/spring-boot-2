import React, { useEffect } from 'react'
import { createEmployee, getEmployeeById } from '../services/EmployeeService';
import { useNavigate ,useParams} from 'react-router-dom';

function EmployeeComponent() {
 
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [error, setError] = React.useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const navigate = useNavigate();

    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeData = {
            firstName,
            lastName,
            email
        };
        console.log('Form submitted:', { firstName, lastName, email });

        if (validateForm()) {
        createEmployee(employeeData)
            .then(response => {
                console.log('Employee created successfully:', response.data);
                // Reset form fields after successful submission
                setFirstName('');
                setLastName('');
                setEmail('');
            })
            .catch(error => {
                console.error('Error creating employee:', error);
            });

            // navigate('/'); // Navigate back to the employee list after submission
            }
        }

    function validateForm() {
        let isValid = true;
        const newError = { firstName: '', lastName: '', email: '' };

        if (!firstName.trim()) {
            newError.firstName = 'First name is required';
            isValid = false;
        }

        if (!lastName.trim()) {
            newError.lastName = 'Last name is required';
            isValid = false;
        }

        if (!email.trim()) {
            newError.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = 'Email is invalid';
            isValid = false;
        }

        setError(newError);
        return isValid;
    }

   function setPageTitle(){
    if(id){
       getEmployeeById(id).then(response => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
       }).catch(error => {
        console.error('Error fetching employee:', error);
       });
           
       return <h1 className="text-center">Update Employee</h1>
    }else{
       return <h1 className="text-center">Add Employee</h1>
    }

   }

  return (
    <>
    <div className="container">
        {setPageTitle()}
        <form>
            <div className="form-group">
                <label className='text-left'>First Name</label>
                <input type="text" name='firstName' value={firstName} 
                className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                onChange={(e)=> setFirstName(e.target.value)} placeholder="Enter first name" />
                {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name='lastName' value={lastName} 
                className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                onChange={(e)=> setLastName(e.target.value)} placeholder="Enter last name" />
                {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" name='email' value={email} 
                className={`form-control ${error.email ? 'is-invalid' : ''}`}
                onChange={(e)=> setEmail(e.target.value)}  placeholder="Enter email" />
                {error.email && <div className="invalid-feedback">{error.email}</div>}
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>  
    </>
  )
}

export default EmployeeComponent