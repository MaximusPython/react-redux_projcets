import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]) // массив обьектов

  const addTodoHandler = (text) => {
    const newTodo = {
      // массив обьектов будет, 1 задача это 1 обьект с 3 свойствами
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo]) // добавляем новый обьект в наш массив
  }
  const deleteTodoHandler = (id) => {
    // пробегаемся по каждому элементу и индексу массива, и возвращаем новый
    // массив с элементами у которых  индекс не совпадает с переданным индексом.
    setTodos(todos.filter((todo) => todo.id !== id)) // вместо _ имеется ввиду todo
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted } // меняй значение свойства isCompleted на предыдущую
          : { ...todo }
      ) // создаться новый массив с измененным свойста переданного id задачи (если передаваемое id равно -id задачи в массиве)
      // иначе возвращай текущую задачу в новом массиве
    )
  }

  const resetTodoHandler = () => {
    setTodos([]) // эта функция очищает наш массив полностью
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted)) // отфильтровываем только завершенные задачи, оставляем только не true (т.e false)
  }

  // создаем счетчик завершенных задач для скрытия кнопки если таких нет
  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length !== 0 && ( // && его лучше всего использовать когда надо просто вывести jsx код, если массив не пустой выводи блок
        <TodosActions
          completedTodoExist={!!completedTodoCount} // если есть завершенные задачи будет true, если нет то false
          resetTodos={resetTodoHandler}
          deleteCompletedTodosHandler={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2>
          {`You have completed ${completedTodoCount}  ${
            completedTodoCount > 1 ? 'todos' : 'todo'
          }`}
        </h2>
      )}
    </div>
  )
}

export default App
