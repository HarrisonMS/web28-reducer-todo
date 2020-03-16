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
      default: return currentState;
  } 
}