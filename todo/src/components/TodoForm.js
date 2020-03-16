import React, { useState } from 'react';

const TodoForm = (props) => {
	const { addTodo, clearTodo } = props;

	const [ item, setItem ] = useState('');

	const handleChange = (e) => setItem(e.target.value);

	const handleSubmit = (e) => {
    e.preventDefault();
    const checkedItem = item.trim();
    {!item.length ?
    alert('got to insert the todo to do the to do.. do that and the todo should do what you want it to do') : 
    addTodo(checkedItem);
		setItem('');}
	};

	const handleClear = (e) => {
		e.preventDefault();
		clearTodo();
	};

	return (
		<div className="formWrapper">
			<form onSubmit={handleSubmit}>
				<input type='text' name='item' value={item} onChange={handleChange} placeholder='Add ToDo:' />
				<button type='submit'>Add ToDo</button>
				<button onClick={handleClear}>Clear ToDo</button>
			</form>
		</div>
	);
};
export default TodoForm;
