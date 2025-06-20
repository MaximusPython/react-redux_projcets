import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  resetFilter,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()

  const titleFilter = useSelector((state) => state.filter.title) // подписка на изменение свойства title

  const authorFilter = useSelector(selectAuthorFilter) // подписались на изменение поля фильтр по автору

  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleTitleFilterChange = (e) => {
    // при изменении поля ввода отправляем действия в стор
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = (e) => {
    // при изменении поля ввода отправляем действия в стор
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  const handleResetFilters = () => {
    dispatch(resetFilter())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter} // передаем в качестве значения подписку тем сам делая поле ввода контролируемым
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange} // вызов функции для отправки действия в стор при изменении поля
          ></input>
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            onChange={handleAuthorFilterChange}
            placeholder="Filter by author..."
          ></input>
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset book
        </button>
      </div>
    </div>
  )
}

export default Filter
