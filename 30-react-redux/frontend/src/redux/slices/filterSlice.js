import { createSlice } from '@reduxjs/toolkit' // получается что эта функция содержит функции по возврату действий type
// и центральный reducer

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload } //традиционный подход возращаем новый обьект
      //   state.title = action.payload можно еще вот так изменять текущий state через immen
    },
    resetFilter: () => {
      // reducer для очистки состояния
      return initialState
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    }, //традиционный подход возращаем новый обьект
    //   state.title = action.payload можно еще вот так изменять текущий state через immen

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
  },
})

export const {
  setTitleFilter,
  resetFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
