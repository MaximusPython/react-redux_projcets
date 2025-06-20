import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { addBook } from '../../redux/books/actionCreators'
import { setAddBook } from '../../redux/slices/booksSlice'
import createBookWithID from '../../redux/utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex] // передаем в элемент в массиве booksData полученный индекс

    dispatch(setAddBook(createBookWithID(randomBook))) //     // функция к рандомному обьекту добавляем новое свойство id с уникальным ключем и св-во isFavorite: false,
    //    передаем наш экшен в стор
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      // если данные поля заполены то создавай обьект книга

      dispatch(setAddBook(createBookWithID({ title, author }))) // передаем наш action в store, в общее состояние
      console.log(title, author)
      setTitle('')
      setAuthor('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random Book
        </button>
      </form>
    </div>
  )
}

export default BookForm
