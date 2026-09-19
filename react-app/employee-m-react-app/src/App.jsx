import { useState } from 'react'
// import './App.css'
import EmployeesList from './components/EmployeeListComponent';
import { BrowserRouter, Route, Router, Routes ,Link} from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Employee</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="/add" element={<EmployeeComponent />} />
        <Route path="/edit/:id" element={<EmployeeComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
