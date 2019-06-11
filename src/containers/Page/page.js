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

const useStyles = makeStyles((theme) => ({
	root: {},
	hamburger: {
		position: 'fixed',
		top: 0,
		right: 0,
		margin: theme.spacing(2),
		marginRight: theme.spacing(6)
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
			<IconButton aria-label="menu" className={classes.hamburger} onClick={handleMenuClick}>
				<MenuIcon />
			</IconButton>
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
