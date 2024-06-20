const App = ({ initalButtonText, changeButtom }) => {
  let [buttonText, setButtonText] = React.useState(initalButtonText)
  let [color, setColor] = React.useState(changeButtom)

  const onButtonClick = () => {
    setButtonText('Hello from Max')
    setColor('green-btn')
  }
  return (
    <div className="app">
      <button className={color} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App changeButtom="" initalButtonText="click me please" />)
