import styles from './Todo.module.css'
import React from 'react'
import { RiTodoFill } from 'react-icons/ri'

export default function Todo(props) {
  const { todo, deleteTodo, index } = props

  return (
    // используем стрелочную функцию так как нам нужно передать еще аргумент index в обработчике
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
