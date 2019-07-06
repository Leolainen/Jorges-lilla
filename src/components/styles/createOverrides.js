import { styles as ExpansionPanelStyles } from '../ExpansionPanel/ExpansionPanel';

const createOverrides = (theme) => ({
	MuiExpansionPanel: ExpansionPanelStyles(theme)
});

export default createOverrides;
