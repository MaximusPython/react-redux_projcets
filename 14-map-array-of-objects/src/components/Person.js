function Person(props) {
  const { id, firstName, lastname, img } = props
  return (
    <div className="Person">
      <img src={img} alt="img" />
      <h3>
        {firstName} {lastname}
      </h3>
      <h4>{id}</h4>
    </div>
  )
}

export default Person
