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
		case 'setCurrentCharacter':
			return {
				...state,
				currentCharacter: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
