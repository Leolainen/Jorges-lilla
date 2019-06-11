import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { useAppContext } from '../AppContext';
import { TOGGLE_SIDEBAR } from '../AppContext/constants';
import Sidebar from '../Sidebar';

import IconButton from '../../components/IconButton';
import Container from '../../components/Container';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#78909c',
		minWidth: '100vw',
		minHeight: '100vh'
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

	const handleMenuClick = () => {
		dispatch({
			type: TOGGLE_SIDEBAR
		});
	};
	const classes = useStyles();

	return (
		<main ref={ref} className={classnames(classes.root, className)} {...other}>
			<AppBar className={classes.header}>
				<Toolbar variant="dense">
					<IconButton aria-label="menu" className={classes.hamburger} onClick={handleMenuClick}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Sidebar open={sidebarIsOpen} onClose={handleMenuClick} />
			<Container maxWidth="lg">{children}</Container>
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
