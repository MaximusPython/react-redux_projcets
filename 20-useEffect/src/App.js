import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    // useEffect обычно используется при ассинхронных функциях (обычно при загрузки данных с серверов)
    console.log('Callback in useEffect called')
    fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then((response) => response.json()) // тут метод json возвратит промис поэтому далее нужен второй then
      .then((json) => setTodo(json))
  }, []) // массив зависимостей пустой нужен чтобы повторно чтобы react выполнял то что указано в функции useEffect один раз
  console.log('App rendered')
  console.log(todo) // первый раз выводит null потому todo null имеет состояние начальное
  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>
}

export default App

// вывод в консоль будет см ниже;
// App rendered
// App.js:14 null
// App.js:8 Callback in useEffect called
// App.js:13 App rendered
// App.js:14 {userId: 1, id: 4, title: 'et porro tempora', completed: true}
