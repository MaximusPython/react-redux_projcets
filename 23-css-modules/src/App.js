import Info from './components/Info'
import './App.css'

function App() {
  return (
    // css правила из info.modules.css не работает здесь

    <div className="App">
      <Info />
      <div className="info">
        <h1>App component</h1>
        <h2>Text h2 from component App</h2>
        <button className="my-button">App component button</button>
      </div>
    </div>
  )
}

export default App
