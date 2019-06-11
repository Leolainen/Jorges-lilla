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

	console.log('currentEntry, App.js:', currentEntry);

	return (
		<Page>
			<pre>hello</pre>
			{/** chidren */}
		</Page>
	);
};

App.uiName = 'App';

export default App;
