/**
 * 
 * @param {*} state 
 * @param { type, payload } action 
 */
const reducer = (state, action) => {
	switch (action.type) {
		case 'toggleSidebar':
			return {
				...state,
				sidebarIsOpen: !state.sidebarIsOpen
			};
		case 'setSidebar':
			return {
				...state,
				sidebarIsOpen: action.payload
			};
		case 'setCurrentEntry':
			return {
				...state,
				currentEntry: action.payload
			};
		case 'setEntries':
			return {
				...state,
				entries: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
