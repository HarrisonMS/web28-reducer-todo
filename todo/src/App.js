import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoDisplay from './components/TodoDisplay';
function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const addTodo = (item) => {
		dispatch({ type: 'ADD_TODO', payload: item });
	};
	const toggleTodo = (id) => {
		dispatch({ type: 'TOGGLE_TODO', payload: id });
	};
	const clearTodo = () => {
		dispatch({ type: 'CLEAR_COMPLETED' });
	};

	return (
		<div className='App'>
			<h1 className='header'>Harrison's ToDo's</h1>
			<TodoForm addTodo={addTodo} clearTodo={clearTodo} />
			<TodoDisplay todoArray={state.todoArray} toggleTodo={toggleTodo} />
		</div>
	);
}

export default App;
