// ['Bogdan', 'Alice']

const initialState = []

// чистая функция принимает текущее состояние и новое действие (типы разные бывают)
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload]
    case 'DELETE_NAME':
      return state.filter((personName) => personName !== action.payload)
    case 'CLEARS_NAMES':
      return []
    default:
      return state
  }
  //   if (action.type === 'ADD_NAME') {
  //     return [...state, action.payload] // то берем текущий массив состояний и добавляем строку нашу (payload)
  //   }
  //   if (action.type === 'DELETE_NAME') {
  //     return state.filter((personName) => personName !== action.payload)
  //   }
  //   if (action.type === 'CLEARS_NAMES') {
  //     return []
  //   }
  //   return state // если наш тип не 'ADD_NAME' то мы изменять наш state не будем просто текущий отдадим
}

let newState = reducer(initialState, { type: 'ADD_NAME', payload: 'Bogdan' })

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' })
console.log(newState)

newState = reducer(newState, { type: 'DELETE_NAME', payload: 'Alice' })
console.log(newState)

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Max' })
console.log(newState)

newState = reducer(newState, { type: 'CLEARS_NAMES' })
console.log(newState)

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Alice' })
console.log(newState)

newState = reducer(newState, { type: 'ADD_NAME', payload: 'Nick' })

console.log(newState)
