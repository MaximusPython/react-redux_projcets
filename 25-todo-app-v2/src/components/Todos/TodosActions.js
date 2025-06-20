import { RiDeleteBack2Line, RiRefreshLine } from 'react-icons/ri'
import React from 'react'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

export default function TodosActions({
  resetTodos,
  deleteCompletedTodosHandler,
  completedTodoExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodosHandler}
        disabled={!completedTodoExist} // cкрываем кнопку если нет завершенных задач
      >
        <RiDeleteBack2Line />
      </Button>
    </div>
  )
}
