import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = [
  'Click me Max',
  'Press me Max',
  'Kick me Max',
  'Hit me Max',
  'Kiss me Max',
  'Pic me Max',
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        console.log(index)
        return <Button onClick={incrementCount} text={text} key={index} />
      })}
    </div>
  )
} /* строка 17 с вызовом функции map равнозначна коду ниже 
{[
  <Button onClick={incrementCount} text={texts[0]} />
  <Button onClick={incrementCount} text={texts[1]} />
  <Button onClick={incrementCount} text={texts[2]} />
  <Button onClick={incrementCount} text={texts[3]} />
  <Button onClick={incrementCount} text={texts[4]} />
  <Button onClick={incrementCount} text={texts[5]} />
  ]} */
export default App
