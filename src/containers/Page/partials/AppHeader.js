import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';

import { useAppContext } from '../../AppContext';
import { TOGGLE_SIDEBAR, SET_SIDEBAR } from '../../AppContext/constants';

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
	},
	hamburger: {
		marginLeft: 'auto'
	}
}));

const AppHeader = (props) => {
	const { className = '' } = props;
	const [ {}, dispatch ] = useAppContext();
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
	const classes = useStyles(props);

	/**
   * Poor solution. Needs refactoring!!!
   */
	React.useEffect(
		() => {
			if (isDesktop) {
				setMenu(true);
			}
		},
		[ isDesktop ]
	);

	const toggleMenu = () => {
		dispatch({
			type: TOGGLE_SIDEBAR
		});
	};

	const setMenu = (payload) => {
		dispatch({
			type: SET_SIDEBAR,
			payload
		});
	};

	const onMenuClick = () => {
		toggleMenu();
	};

	return (
		<AppBar className={classnames(classes.root, className)}>
			<ToolBar>
				<IconButton aria-label="menu" className={classes.hamburger} onClick={onMenuClick}>
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
