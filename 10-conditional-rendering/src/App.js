import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="parent" age="2" hasPet />
      <PetInfo animal="parent" age="2" hasPet={false} />
    </div>
  )
}

export default App
