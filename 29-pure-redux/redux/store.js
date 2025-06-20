import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm' // мы импортируем configureStore из внешней библиотеки
import reducer from './reducer.js'

// создали redux store через функцию configureStore( передаем js обьект с свойстом reducer а значением для него будет наш файл reducer который мы импортуем в этот файл)
export default configureStore({
  //  подключили наш reducer , и функция configureStore возвратит магазин redux созданный на основании reducer который мы тут указали
  reducer: reducer,
})
