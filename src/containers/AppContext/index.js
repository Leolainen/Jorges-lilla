import React, { useContext, useReducer } from 'react';

export const AppContext = React.createContext();

export const AppContextProvider = ({ reducer, initialState, children }) => (
	<AppContext.Provider value={useReducer(reducer, initialState)}>{children}</AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);
