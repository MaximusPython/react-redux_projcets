import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the Wrapper children h2</h2>
        <button>Click me! children</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text children h2</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
      <Wrapper color="blue">
        <h3>Another text children h3</h3>
        <p>Some yet description</p>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
    </div>
  )
}

// Что такое оболочка wrapper в ReactJS?
//Компоненты-wrapper — это компоненты, которые окружают неизвестные компоненты и предоставляют структуру по умолчанию
// для отображения дочерних компонентов. Компонент-оболочка может использоваться для создания компонентов
// пользовательского интерфейса (UI), которые часто используются в дизайне, таких как модальные окна, страницы шаблонов и информационные плитки.
export default App
