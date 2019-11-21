import { createMuiTheme } from '@material-ui/core/styles';

import createOverrides from './createOverrides';
import props from './props';

const theme = (type = 'dark') =>
	createMuiTheme({
		palette: {
			type
		},
		props
	});

theme.overrides = createOverrides(theme);

export default theme;
