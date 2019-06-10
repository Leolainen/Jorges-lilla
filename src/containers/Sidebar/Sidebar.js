import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import Drawer from '../../components/Drawer';

const useStyles = makeStyles((theme) => ({
	root: {}
}));

const Sidebar = React.forwardRef(function Sidebar(props, ref) {
	const { className, children, ...other } = props;
	const classes = useStyles();

	return (
		<Drawer anchor="right" ref={ref} className={classnames(classes.root, className)} {...other}>
			{children}
		</Drawer>
	);
});

Sidebar.propTypes = {
	className: PropTypes.string
};

Sidebar.defaultProps = {
	className: ''
};

Sidebar.uiName = 'Sidebar';

export default Sidebar;
