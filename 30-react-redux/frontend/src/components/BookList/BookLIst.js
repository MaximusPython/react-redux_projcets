import { useSelector, useDispatch } from 'react-redux'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  setDeleteBook,
  setToggleFavorite,
  selectBooks,
} from '../../redux/slices/booksSlice'

import './BookList.css'

const BookList = () => {
  const books = useSelector(selectBooks) // отображаем нашу часть нашего состояния через подписку хука useSelector (если изменяется он ререндериться весь этот компонент)
  const titleFilter = useSelector(selectTitleFilter) // подписались на изменение поля фильтр по титлу
  const authorFilter = useSelector(selectAuthorFilter) // подписались на изменение поля фильтр по автору
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(setDeleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(setToggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    // поиск осуществляем по титлу книги и вводимому значению пользователя все приводим к нижнему регистру создаться новый обьект
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const mathesFavorite = onlyFavoriteFilter ? book.isFavorite : true

    return matchesTitle && matchesAuthor && mathesFavorite
  })

  const highlightMath = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, 'gi')

    console.log(regex)

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books availiable</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMath(book.title, titleFilter)} by{' '}
                <strong>{highlightMath(book.author, authorFilter)}</strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete Book
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
