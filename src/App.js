import React, { useEffect } from 'react';

import { useAppContext } from './containers/AppContext';
import { SET_CURRENT_ENTRY, SET_ENTRIES } from './containers/AppContext/constants';
import Page from './containers/Page';

import bestiaryData from './data/bestiary';

const App = (props) => {
	const [ { currentEntry }, dispatch ] = useAppContext();

	/* Initialize bestiary */
	useEffect(() => {
		dispatch({
			type: SET_ENTRIES,
			payload: bestiaryData
		});
		dispatch({
			type: SET_CURRENT_ENTRY,
			payload: bestiaryData[0]
		});
	}, []);

	return (
		<Page>
			<p>hej</p>
			<pre>{JSON.stringify(currentEntry)}</pre>
			{/** chidren */}
		</Page>
	);
};

App.uiName = 'App';

export default App;
