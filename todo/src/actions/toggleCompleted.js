export const toggleCompleted = () => {
  dispatchEvent({type: 'TOGGLE_COMPLETED', payload: todo})
}