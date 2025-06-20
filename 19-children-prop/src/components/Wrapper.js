function Wrapper(props) {
  const style = {
    backgroundColor: props.color, // color будет разный так как в App мы его всем 3 компон даем свой
    width: '250px',
    padding: '30px',
    margin: '30px auto',
  }
  return (
    <div style={style}>
      <h1>Заголовок Н1</h1>
      {props.children}
    </div>
    // в children будет находится сам Wrapper с тегами из App
  )
}

export default Wrapper
