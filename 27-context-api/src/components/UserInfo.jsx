import { useContext } from 'react'
import UserContext from '../context/UserContext'

const UserInfo = () => {
  const { userName } = useContext(UserContext)
  return <h1>{userName}</h1> // просто выводим значение из контекста

  // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
}

export default UserInfo
