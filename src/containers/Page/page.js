import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { useAppContext } from '../AppContext';
import { TOGGLE_SIDEBAR } from '../AppContext/constants';
import Sidebar from '../Sidebar';

import Button from '../../components/Button';
import Container from '../../components/Container';

const useStyles = makeStyles((theme) => ({
	root: {},
	hamburger: {
		position: 'absolute',
		top: 0,
		right: 0,
		margin: theme.spacing(2)
	}
}));

const Page = React.forwardRef(function Page(props, ref) {
	const { className, children, ...other } = props;
	const [ { sidebarIsOpen }, dispatch ] = useAppContext();

	const handleMenuClick = () =>
		dispatch({
			type: TOGGLE_SIDEBAR
		});

	const classes = useStyles();

	return (
		<div ref={ref} className={classnames(classes.root, className)} {...other}>
			<Button onClick={handleMenuClick}>
				<MenuIcon className={classes.hamburger} />
			</Button>
			<Sidebar />
			<Container maxWidth="lg">{children}</Container>
		</div>
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
