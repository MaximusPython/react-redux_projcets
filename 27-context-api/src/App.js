import { useState } from 'react'
import UserContext from './context/UserContext'
import './App.css'
import User from './components/User'
import TestForm from './components/TestForm'

function App() {
  const [user, setUser] = useState('Maxim')

  return (
    <UserContext.Provider value={{ userName: user, setName: setUser }}>
      <div className="App">
        <User />
        <TestForm />
      </div>
    </UserContext.Provider>
  )
}

export default App
