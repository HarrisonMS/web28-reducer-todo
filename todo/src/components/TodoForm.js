import React, { useState } from 'react';

const TodoForm = (props) => {
  // destructuring from props for easier access
  const { addTodo, clearCompleted } = props;
  // check wording local state to handle the state of the form before submission
  const [ todo, setTodo ] = useState ('')
  // set todo to equal handle change event.target value call on input field to change todo name**
  const handleChange = (e) => setTodo(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDfault();
    addTodo(todo);
    setTodo('');
  };

  const handleClear = (e) => {
    e.preventDfault();
    clearCompleted();
  };
  return (
    <div className="todoFormWrapper">
      <form className="todoForm" onSubmit={handleSubmit}>
        <input type='text' name='todo' value={todo} onChange={handleChange} placeholder='Add a Todo' />
        <button className='button' type='submit'>addTodo</button>
        <button className='button' onClick={handleClear}>Clear Completed</button>
      </form>
    </div>
  );
};