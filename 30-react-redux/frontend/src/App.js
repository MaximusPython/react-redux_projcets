import BookForm from './components/BookForm/BookForm'
import BookLIst from './components/BookList/BookLIst'
import Filter from './components/Filter/Filter'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookLIst />
        </div>
      </main>
    </div>
  )
}

export default App
