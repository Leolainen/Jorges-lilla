import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import createOverrides from './createOverrides';

const theme = (type = 'dark') =>
	createMuiTheme({
		palette: {
			type
		},
		props: {
			MuiAppBar: {
				elevation: 0
			},
			MuiExpansionPanelSummary: {
				expandIcon: <ExpandMoreIcon />
			},
			MuiButton: {
				disableRipple: true,
				disableFocusRipple: true,
				disableTouchRipple: true
			},
			MuiListItem: {
				disableRipple: true,
				disableFocusRipple: true,
				disableTouchRipple: true
			}
		}
	});

theme.overrides = createOverrides(theme);

export default theme;
