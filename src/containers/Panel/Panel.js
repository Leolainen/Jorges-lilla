import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import ExpansionPanel from '../../components/ExpansionPanel';
import ExpansionPanelSummary from '../../components/ExpansionPanelSummary';
import Table from '../../components/Table';
import TableBody from '../../components/TableBody';
import TableHeader from '../../components/TableHeader';

const useStyles = makeStyles((theme) => ({
	root: {}
}));

const Panel = React.forwardRef(function Panel(props, ref) {
	const {
		//props
		headline,
		className,
		...other
	} = props;

	const classes = useStyles();

	return (
		<ExpansionPanel ref={ref} className={classnames(classes.root, className)} {...other}>
			<ExpansionPanelSummary>{headline}</ExpansionPanelSummary>
			{children}
		</ExpansionPanel>
	);
});

Panel.propTypes = {
	className: PropTypes.string
};

Panel.defaultProps = {
	className: ''
};
export default Panel;
