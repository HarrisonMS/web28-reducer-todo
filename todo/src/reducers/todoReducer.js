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
export const todoReducer = (state, action) => {
  return state;
}