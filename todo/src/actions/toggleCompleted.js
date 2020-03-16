export const clearCompleted = () => {
  dispatchEvent({type: 'TOGGLE_COMPLETED'})
}