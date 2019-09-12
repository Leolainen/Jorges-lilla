import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import Container from '../../components/Container';
import { useAppContext } from '../AppContext';

import AppHeader from './partials/AppHeader';
import AppDrawer from './partials/AppDrawer';

const DRAWER_WIDTH = 250;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.default
	},
	content: {
		paddingTop: theme.spacing(10),

		[theme.breakpoints.up('md')]: {
			transition: theme.transitions.create('padding', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen
			}),
			paddingRight: 0
		}
	},
	contentShift: {
		[theme.breakpoints.up('md')]: {
			transition: theme.transitions.create('padding', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen
			}),
			paddingRight: DRAWER_WIDTH
		}
	}
}));

const Page = (props) => {
	const { className = '', children } = props;
	const classes = useStyles(props);

	const [ { sidebarIsOpen }, dispatch ] = useAppContext();

	return (
		<section className={classnames(classes.root, className)}>
			<AppHeader />

			<Container
				className={classnames(classes.content, {
					[classes.contentShift]: sidebarIsOpen
				})}
				maxWidth="md"
			>
				{children}
			</Container>

			<AppDrawer />
		</section>
	);
};

Page.propTypes = {
	className: PropTypes.string
};

Page.uiName = 'Page';

export default Page;
