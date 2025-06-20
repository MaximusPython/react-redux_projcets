import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
import React from 'react'

export default function Todo(props) {
  const { todo, deleteTodo, toggleTodo, id } = props

  return (
    // используем стрелочную функцию так как нам нужно передать еще аргумент index в обработчике
    <div
      className={`${styles.todo} ${
        // условное добавление классов css: если isCompleted true используй класс completedTodo иначе ''
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(id)}
      />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(id)} />
    </div>
    // добавили выше при нажатии на иконку галочка будет отрабатываться функция с изменением обьекта isCompeted на противоположный при нажатии
  )
}
