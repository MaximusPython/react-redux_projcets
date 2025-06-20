import * as actionTypes from './actionTypes'

const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload]

    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload) // удаление книги по id

    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite } // меняем значение true на false или наоборот
          : book
      )
    default:
      return state
  }
}

export default booksReducer

//этот редюсер не работает мы его отключили от стор
