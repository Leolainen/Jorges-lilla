import './globals/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import appContextReducer from './containers/AppContext/reducer';

import { AppContextProvider } from './containers/AppContext';
import { INITIAL_STATE } from './containers/AppContext/constants';

import { styles as CardMediaStyles } from './components/CardMedia/CardMedia';
import { styles as ExpansionPanelStyles } from './components/ExpansionPanel/ExpansionPanel';

const createOverrides = (theme) => ({
	MuiCardMedia: CardMediaStyles(theme),
	MuiExpansionPanel: ExpansionPanelStyles(theme)
});

const theme = createMuiTheme({
	palette: {
		type: 'dark'
	},
	props: {
		MuiAppBar: {
			elevation: 0
		}
	}
});

theme.overrides = createOverrides(theme);

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<AppContextProvider initialState={INITIAL_STATE} reducer={appContextReducer}>
			<App />
		</AppContextProvider>
	</ThemeProvider>,
	document.getElementById('root')
);
