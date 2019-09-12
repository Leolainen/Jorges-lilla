import './globals/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from '@material-ui/styles';

import appContextReducer from './containers/AppContext/reducer';
import { AppContextProvider } from './containers/AppContext';
import { INITIAL_STATE } from './containers/AppContext/constants';

import theme from './components/styles/createTheme';

const appTheme = theme('dark');

ReactDOM.render(
	<ThemeProvider theme={appTheme}>
		<AppContextProvider initialState={INITIAL_STATE} reducer={appContextReducer}>
			<App />
		</AppContextProvider>
	</ThemeProvider>,
	document.getElementById('root')
);
