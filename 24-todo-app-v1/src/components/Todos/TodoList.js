import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList(props) {
  const { todos, deleteTodo } = props
  if (!todos.length) return <h2>Todo list is empty</h2>

  return (
    <div className={styles.todoListContainer}>
      {/* {!todos.length && <h3>пусто</h3>} можно так еще тут*/}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} /> // передали еще функцию на удаление задачи и индекс к нему
      ))}
    </div>
  ) // тут для каждого todo мы возвращаем не явно
  // вот такой jsx код и перадаем ему свойста если 3 то будет 3 , и для каждого компонента мы передаем строку как
  // значение свойста todo, тут еще нужен key
}
