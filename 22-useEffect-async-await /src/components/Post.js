import './Post.css' // импортируем файл css

function Post(props) {
  // принимаем свойства pos
  const { id, title, userId, body } = props
  return (
    // присваеваем стили для div
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h4>User ID: {userId}</h4>
    </div>
  ) // выводим свойста обьекта pos
}

export default Post
