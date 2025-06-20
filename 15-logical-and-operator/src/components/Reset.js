function Reset({ onClick, buttonStyle, count }) {
  return (
    count > 0 && (
      <div>
        <button style={buttonStyle} onClick={onClick} count={count}>
          Reset
        </button>
      </div>
    )
  )
}

export default Reset
