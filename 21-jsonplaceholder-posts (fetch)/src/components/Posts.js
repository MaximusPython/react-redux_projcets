import Post from './Post'
import { useEffect, useState } from 'react'

function Posts() {
  const [post, setPost] = useState([]) // изначально это будет пустой массив
  const [error, setError] = useState('') // передаем в состояние текст ошибки если она есть
  const [isLoading, setIsLoading] = useState(true) // записываем в состояние на false в .finally

  useEffect(() => {
    // useEffect вызовет кол бэк функцию один раз при начальном рендеренге компонента Posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPost(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, []) // изначально массив зависимостей равен нуля значит функция fetch вызовется один раз

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
