function Login() {
  function handleFormSubmit(event) {}
  return (
    <>
      <h1>Залогиньтесь</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <button type="submit"> login</button>
      </form>
    </>
  )
}

export default Login
