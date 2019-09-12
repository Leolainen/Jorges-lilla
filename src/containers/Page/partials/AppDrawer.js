import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useAppContext } from '../../AppContext';
import { TOGGLE_SIDEBAR } from '../../AppContext/constants';
import Sidebar from '../../Sidebar';

const AppHeader = (props) => {
	const { className = '' } = props;

	const [ { sidebarIsOpen }, dispatch ] = useAppContext();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const handleMenuClick = () => {
		dispatch({
			type: TOGGLE_SIDEBAR
		});
	};

	return <Sidebar open={sidebarIsOpen} onClose={handleMenuClick} isMobile={isMobile} className={className} />;
};

AppHeader.propTypes = {
	className: PropTypes.string
};

AppHeader.uiName = 'AppHeader';

export default AppHeader;
