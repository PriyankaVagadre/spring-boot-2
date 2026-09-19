import { useState } from 'react'
// import './App.css'
import EmployeesList from './components/EmployeeListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmployeesList/>
    </>
  )
}

export default App
