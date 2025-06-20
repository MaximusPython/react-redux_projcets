import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'

const TestForm = () => {
  const { userName, setName } = useContext(UserContext)

  const [username, setUsername] = useState('')

  function handleFormSubmit(event) {
    event.preventDefault()

    const userData = {
      username2: username,
    }
    console.log(userData) //  в консоль выведется обьект с полем username2 и введенным значением юзера уже из состояния
  }

  function handleValueinput(event) {
    setUsername(event.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username} // так мы указываем какое значение должно быть у свойства value
        onChange={handleValueinput} // а тут мы указываем что делать когда юзер изменяет этот инпут,
        //мы тут отдаем измененное значение в состояние username через вызов функции setUsername
      ></input>
      <button type="submit" onClick={() => setName(username)}>
        Sent
      </button>
    </form>
    // меняем контекст передавая ему состояние из инпута
  )
}

export default TestForm
