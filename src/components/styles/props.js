import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const props = {
	MuiAppBar: {
		elevation: 0
	},
	MuiExpansionPanelSummary: {
		expandIcon: <ExpandMoreIcon />
	},
	MuiButtonBase: {
		disableRipple: true,
		/* disableFocusRipple: true, */
		disableTouchRipple: true
	}
};

export default props;
