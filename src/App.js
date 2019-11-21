import React from 'react';

import Bestiary from './pages/Bestiary';
import Page from './containers/Page';

const App = (props) => {
	/*  const [ { currentTab }, dispatch ] = useAppContext();
  
  const changeTab = () => dispatch({
    type: SET_TAB,
    payload: bestiaryData
  });
 */

	return (
		<Page>
			<Bestiary />
		</Page>
	);
};

App.uiName = 'App';

export default App;
