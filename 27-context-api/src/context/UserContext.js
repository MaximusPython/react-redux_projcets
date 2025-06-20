import { createContext } from 'react'

const UserContext = createContext({
  userName: '',
  setName: () => {},
}) // создали сам контекст в котором есть обьект. ключи можно назвать как угодно

export default UserContext
