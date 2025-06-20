import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmit(event) {
    event.preventDefault()

    console.log(data)
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value })
  }
  return (
    <>
      <h1>Залогиньтесь</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          ></input>
        </label>
        <button type="submit"> login</button>
      </form>
    </>
  )
}

export default Login
