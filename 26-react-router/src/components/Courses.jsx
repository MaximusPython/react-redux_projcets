import { useLocation, Link, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/courses'
import { useState, useEffect } from 'react'

const SORT_KEYS = ['title', 'slug', 'id'] // массив ожидаемых нами ключей (или значений)

function sortCourses(courses, key) {
  // функция осуществляющая сортировку нашего массива
  const sortedCourses = [...courses] // просто копия оригинального массива

  if (!key || !SORT_KEYS.includes(key)) {
    // если ключа нет или он есть но его нет в нашем массиве ключей
    return sortedCourses
  } // если переданного параметра (ключа) нет то возвращай не измененный массив
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  // если ключ есть то делай сортировку обьектов
  return sortedCourses // метод сорт мутирует наш массив
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search) // парсим значениe из свойста search у обьекта location
  const [sortKey, setSortKey] = useState(query.sort) // ожидаем запрос по ?sort=

  const navigate = useNavigate()

  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey) // уже отсортированный массив мы будем иметь в состоянии sortedCourses
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.') // то перезапускаем эту жу страницу
      setSortKey() // обнуляем состояние query передаваемого параметра
      setSortedCourses([...courses]) // и в состояние массива возвращаем исходный не отсортированный массив
    }
  }, [sortKey, navigate])
  //   === parsed.value && <h1>ура</h1>)

  return (
    // получается сначала массив отсортируеся потом уже будет вызван код ниже
    <>
      <h1>{sortKey ? `Sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        // уже присваеваем ссылку каждому отсортированному курсу на отдельную страницу и выводим его свойства
        <div key={course.id}>
          <Link className="courseLink" to={course.slug}>
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
