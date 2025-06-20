import { createSlice } from '@reduxjs/toolkit'

const inititalState = []

const booksSlice = createSlice({
  name: 'books',
  initialState: inititalState,
  reducers: {
    setAddBook: (state, action) => {
      return [...state, action.payload]
    },
    setDeleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    setToggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite } // меняем значение true на false или наоборот
          : book
      )
    },
  },
})

export const { setAddBook, setDeleteBook, setToggleFavorite } =
  booksSlice.actions

export const selectBooks = (state) => state.books

// export const selectTitleBook = (state) => state.books.title
// export const selectAuthorBook = (state) => state.books.author

// Так как у нас массив а не обьект, и тут нет свойств которые нужно отдельно отслеживать
// мы отслеживаем const books = useSelector((state) => state.books эту часть состояния целиком и передаем его в BookList

export default booksSlice.reducer
