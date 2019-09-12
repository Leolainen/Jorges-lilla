import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

import { useAppContext } from '../../AppContext';
import { TOGGLE_SIDEBAR } from '../../AppContext/constants';

import AppBar from '../../../components/AppBar';
import IconButton from '../../../components/IconButton';
import ToolBar from '../../../components/ToolBar';

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: 'auto',
		backgroundColor: theme.palette.background.paper
	},
	header: {
		background: 'none',
		boxShadow: 'none'
	}
}));

const AppHeader = (props) => {
	const { className = '' } = props;

	const [ {}, dispatch ] = useAppContext();

	const handleMenuClick = () => {
		dispatch({
			type: TOGGLE_SIDEBAR
		});
	};

	const classes = useStyles(props);

	return (
		<AppBar className={classnames(classes.root, className)}>
			<ToolBar>
				<IconButton aria-label="menu" className={classes.hamburger} onClick={handleMenuClick}>
					<MenuIcon />
				</IconButton>
			</ToolBar>
		</AppBar>
	);
};

AppHeader.propTypes = {
	className: PropTypes.string
};

AppHeader.uiName = 'AppHeader';

export default AppHeader;
