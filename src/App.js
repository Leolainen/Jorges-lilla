import React, { useEffect } from 'react';

import { AppContextProvider, useAppContext } from './containers/AppContext';
import { INITIAL_STATE, SET_CURRENT_CHARACTER } from './containers/AppContext/constants';
import appContextReducer from './containers/AppContext/reducer';
import Page from './containers/Page';

import bestiaryData from './data/bestiary.json';

const App = React.forwardRef(function App(props, ref) {
	const { children } = props;

	const [ { currentCharacter }, dispatch ] = useAppContext();

	/* Initialize bestiary */
	useEffect(() => {
		dispatch({
			type: SET_CURRENT_CHARACTER,
			payload: bestiaryData.bestiary[0]
		});
	}, []);

	return (
		<AppContextProvider initialState={INITIAL_STATE} reducer={appContextReducer}>
			<Page>{children}</Page>
		</AppContextProvider>
	);
});

App.uiName = 'App';

export default App;
