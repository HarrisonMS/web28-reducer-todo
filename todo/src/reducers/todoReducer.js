export const initialState = {
	todoArray : [
		{
			item      : 'Learn about reducers',
			completed : false,
			id        : 3892987589,
    },
    {
			item      : 'Learn about reducers some more',
			completed : false,
			id        : 3892987582,
    },
    {
			item      : 'KEEEEEP on learnin',
			completed : false,
			id        : 3892987587,
		},
	],
};
export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			const newTodo = {
				item      : action.payload,
				completed : false,
				id        : Date.now(),
			};
			return {
				...state,
				todoArray : [ ...state.todoArray, newTodo ],
			};

		case 'TOGGLE_TODO':
			return {
				...state,
				todoArray : state.todoArray.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed } : todo)
			};

		case 'CLEAR_COMPLETED':
			return {
				...state,
				todoArray : state.todoArray.filter((todo) => !todo.completed),
			};

		default:
			return state;
	}
};
