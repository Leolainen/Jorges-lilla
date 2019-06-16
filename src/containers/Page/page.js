import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useAppContext } from '../AppContext';
import { TOGGLE_SIDEBAR } from '../AppContext/constants';
import Sidebar from '../Sidebar';

import Box from '../../components/Box';
import IconButton from '../../components/IconButton';
import Container from '../../components/Container';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';
import Hidden from '../../components/Hidden';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '100vw',
		height: '100vh',
		display: 'grid',
		[theme.breakpoints.up('md')]: {
			grid: 'auto-flow dense / 1fr 250px'
		}
	},
	hamburger: {
		marginLeft: 'auto'
	},
	header: {
		background: 'none',
		boxShadow: 'none'
	}
}));

const Page = React.forwardRef(function Page(props, ref) {
	const { className, children, ...other } = props;
	const [ { sidebarIsOpen }, dispatch ] = useAppContext();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const handleMenuClick = () => {
		dispatch({
			type: TOGGLE_SIDEBAR
		});
	};
	const classes = useStyles();

	return (
		<main ref={ref} className={classnames(classes.root, className)} {...other}>
			<Hidden mdUp>
				<AppBar className={classes.header}>
					<Toolbar variant="dense">
						<IconButton aria-label="menu" className={classes.hamburger} onClick={handleMenuClick}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Hidden>
			<Container maxWidth="md">
				<Box mt={16}>{children}</Box>
			</Container>
			<Sidebar open={sidebarIsOpen} onClose={handleMenuClick} isMobile={isMobile} />
		</main>
	);
});

Page.propTypes = {
	className: PropTypes.string
};

Page.defaultProps = {
	className: ''
};

Page.uiName = 'Page';

export default Page;
