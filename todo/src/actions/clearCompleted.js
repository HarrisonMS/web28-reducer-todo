export const clearCompleted = () => {
  dispatchEvent({type: 'CLEAR_COMPLETED', payload:todo})
}