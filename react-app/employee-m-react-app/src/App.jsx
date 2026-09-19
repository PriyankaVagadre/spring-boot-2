import { useState } from 'react'
// import './App.css'
import EmployeesList from './components/EmployeeListComponent';
import { BrowserRouter, Route, Router, Routes ,Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
