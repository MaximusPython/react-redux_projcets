import Post from './Post'
import { useEffect, useState } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const [post, setPost] = useState([]) // изначально это будет пустой массив
  const [error, setError] = useState('') // передаем в состояние текст ошибки если она есть
  const [isLoading, setIsLoading] = useState(true) // записываем в состояние на false в .finally

  useEffect(() => {
    ;(async function () {
      // как iife оформили функцию
      try {
        // тоже также так как возвращается промис поэтому используем await
        const res = await fetch(API_URL) // c await нужно использовать async как раньше используем fetch() результат записываем в res
        const posts = await res.json() // полученный результат с сервера записываем в переменную posts, posts уже будет массивом постов готовым
        setPost(posts) // и передаем массив в состояние post cм 7 строка
      } catch (error) {
        // в блоке catch у нас будет доступ к ошибке
        setError(error.message) // в состояние error передаем значение ошибки
      }
      setIsLoading(false) // изменяем в конце в состояние isLoading на false
    })()
  }, []) // пустой массив это второй аргумент так как мы его хотим обращаться к серверу однократно

  // useEffect(() => {
  //   // useEffect вызовет кол бэк функцию один раз при начальном рендеренге компонента Posts
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setPost(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false))
  // }, []) // изначально массив зависимостей равен нуля значит функция fetch вызовется один раз

  if (error) {
    // если есть ошибка то возвращай только  <h1>Error: {error}</h1> нижний return не вызовется
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      <h1>Посты</h1>
      <hr />
      {isLoading ? (
        <h1>Идет загрузка...</h1> // тернарный оператор если isLoading true то  <h1>Идет загрузка...</h1>
      ) : (
        // если false то сами посты выводим
        post.map((pos) => <Post key={pos.id} {...pos} />) // спред оператор передаем свойства pos компоненту Post
      )}
    </div>
  )
}

export default Posts

// вывели массив 100 элементов из сервиса placeholder в консоль
