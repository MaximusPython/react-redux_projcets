import { configureStore } from '@reduxjs/toolkit'
// import booksReducer from './books/reducer' // отключили старый традиционный редюсер
import filterReducer from './slices/filterSlice'
import booksSlice from './slices/booksSlice'

const store = configureStore({
  reducer: { books: booksSlice, filter: filterReducer },
})

export default store
