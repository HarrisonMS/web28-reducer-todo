export const addTodo = () => {
  dispatchEvent({type: 'ADD_TODO', payload:todo})
}