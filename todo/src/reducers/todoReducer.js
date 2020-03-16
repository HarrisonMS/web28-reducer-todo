export const initialState = {
    todoList: [
       {  
          item: 'learn about reducers',
          completed: false,
          id: Date.now()
        },
        {  
          item: 'learn about reducers some more',
          completed: false,
          id: Date.now()
        },
        {  
          item: 'learn about reducers even more',
          completed: false,
          id: Date.now()
        },
   ]
};
export const todoReducer = (currentState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return {
        ...currentState,
        todoList: [...currentState.todoList, newTodo]
      }
    case 'TOGGLE_COMPLETED':
      return {
        ...currentState,
        todoList: currentState.todoList.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed } : todo)
        // spreads in current state then maps over the todo lis array checking every todo by comparing if todo id is equal to the id of the todo attempting to toggle complete
        // if true spread in the tdo with the key completed toggled with ! to opposite of whatever it was set to
        // if the todo id does not equal the action.payload return todo
      }
      default: return currentState;
  } 
}