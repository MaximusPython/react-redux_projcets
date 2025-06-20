import store from './redux/store.js'
import { addCurrentTime, clearTimes } from './redux/actionCreators.js'

const addTimeBtn = document.getElementById('addTime') // передаем время в стор
addTimeBtn.addEventListener('click', () => store.dispatch(addCurrentTime()))

const clearTimeBtn = document.getElementById('clearTimes') // удаляем все времена в стор
clearTimeBtn.addEventListener('click', () => store.dispatch(clearTimes()))

const timeList = document.getElementById('timesList') // новый элемент html в который будет помещаться строка время
store.subscribe(() => {
  // подписываемся на изменения getState()
  timeList.innerHTML = ''
  const times = store.getState() // будет наш массив в который мы записываем time (строка времени) в тег li
  times.forEach((time) => {
    let li = document.createElement('li') // находим тег li
    li.innerHTML = time // записываем время в тег li
    timeList.appendChild(li) // и помещаем сам тег li с временем  в тег ul
  })
})
// const unsubscribe = store.subscribe(() =>
//   // подписка на обновления состояния
//   console.log(`Redux store just changed! ${store.getState()}`)
// )

// // все действия делаются через store
// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:30:00',
// })

// unsubscribe() // отписались от изменения состояния , ниже уже не выйдет код

// store.dispatch({
//   type: 'ADD_CURRENT_TIME',
//   payload: '11:32:00',
// })

// store.dispatch({
//   type: 'CLEAR_ALL_TIMES',
// })
