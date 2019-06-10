import React, { useEffect } from 'react';

import { useAppContext } from './containers/AppContext';
import { SET_CURRENT_CHARACTER } from './containers/AppContext/constants';
import appContextReducer from './containers/AppContext/reducer';
import Page from './containers/Page';

import bestiaryData from './data/bestiary';

const App = (props) => {
	const { children } = props;

	const [ { currentCharacter }, dispatch ] = useAppContext();

	/* Initialize bestiary */
	useEffect(() => {
		dispatch({
			type: SET_CURRENT_CHARACTER,
			payload: bestiaryData[0]
		});
	}, []);

	return (
		<Page>
			<p>hej</p>
			<pre>{JSON.stringify(currentCharacter)}</pre>
			{/** chidren */}
		</Page>
	);
};

App.uiName = 'App';

export default App;
