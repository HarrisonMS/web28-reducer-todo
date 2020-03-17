import React from 'react';

const TodoDisplay = ({ todoArray, toggleTodo }) => {
	return (
		<div className='todoList'>
			{todoArray.map((todo) => (
				<div
					style={todo.completed ? { textDecoration: 'line-through', textDecorationColor: 'black', textDecorationThickness: '5px'} : null}
					key={todo.id}
					onClick={() => toggleTodo(todo.id)}
					className={todo.completed ? 'completed' : ''}>
					{todo.item}
				</div>
			))}
		</div>
	);
};
export default TodoDisplay;
