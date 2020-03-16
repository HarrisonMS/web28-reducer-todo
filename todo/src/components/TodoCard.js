import React from 'react';

const TodoCard = (props) => {
	return (
		<div className={`task ${props.task.completed ? 'Completed' : ''}`}>
			onClick ={() => {
				props.toggleToDo(props.task.id);
			}}
			<p>{props.task.id}</p>
		</div>
	);
};
export default TodoCard;
