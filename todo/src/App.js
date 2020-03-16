import React, { useReducer } from 'react'
import './App.css';
import { initialState, todoReducer } from './reducers/todoReducer';
import { addTodo, toggleCompleted, clearCompleted } from './actions/index.js';
function App() {
  const [ state, dispatch ] = useReducer(todoReducer, initialState)
  return (
    <div className="App">

    </div>
  );
}

export default App;
