import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { useAppContext } from '../AppContext';
import { TOGGLE_SIDEBAR, SET_CURRENT_ENTRY } from '../AppContext/constants';

import { getEntryBySpecies } from '../../api/bestiary';

import Typography from '../../components/Typography';
import AppBar from '../../components/AppBar';
import Drawer from '../../components/Drawer';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import ListItemText from '../../components/ListItemText';
import ListSubHeader from '../../components/ListSubHeader';
import Toolbar from '../../components/Toolbar';

const useStyles = makeStyles((theme) => ({
	root: {},
	container: {
		overflowY: 'scroll',
		height: '100%'
	},
	divider: {
		margin: `${theme.spacing(2)}px 0`,
		opacity: 0.6
	},
	searchBar: {
		marginLeft: 'auto'
	}
}));

const Sidebar = React.forwardRef(function Sidebar(props, ref) {
	const { className, children, isMobile, ...other } = props;

	const [ { entries, sidebarIsOpen }, dispatch ] = useAppContext();

	const classes = useStyles();
	const [ bestiary, setBestiary ] = useState([]);
	const [ ancestry, setAncestry ] = useState([]);
	const inputRef = useRef(null);

	useEffect(
		() => {
			setBestiary(entries);
		},
		[ entries, sidebarIsOpen ]
	);

	useEffect(
		() => {
			setAncestry([ ...new Set(bestiary.map((beast) => beast.ancestry)) ]);
		},
		[ bestiary ]
	);

	const handleFilter = (e) => {
		const filteredBestiary = entries.filter((beast) =>
			beast.species.toLowerCase().includes(e.target.value.toLowerCase())
		);

		setBestiary(filteredBestiary);
	};

	const toggleSidebar = () => {
		dispatch({
			type: TOGGLE_SIDEBAR
		});
	};

	const handleSelection = (specie) => {
		const selectedSpecie = getEntryBySpecies(specie);
		dispatch({
			type: SET_CURRENT_ENTRY,
			payload: selectedSpecie
		});

		isMobile && toggleSidebar();
	};

	return (
		<Drawer
			anchor="right"
			ref={ref}
			className={classnames(classes.root, className)}
			variant={isMobile ? 'temporary' : 'permanent'}
			{...other}
		>
			<div role="presentation" className={classes.container}>
				<AppBar color="inherit" position="relative">
					<Toolbar>
						<Input
							fullWidth
							inputRef={inputRef}
							type="search"
							placeholder="Sök efter art..."
							inputProps={{ 'aria-label': 'Search' }}
							onChange={handleFilter}
							className={classes.searchBar}
						/>
						{isMobile && (
							<IconButton onClick={toggleSidebar}>
								<MenuIcon />
							</IconButton>
						)}
					</Toolbar>
				</AppBar>
				<List>
					{ancestry.map((ancestor) => (
						<React.Fragment key={ancestor}>
							<ListSubHeader disableSticky>
								<Typography variant="overline">{ancestor}</Typography>
							</ListSubHeader>
							{bestiary.map(
								(beast) =>
									beast.ancestry === ancestor && (
										<ListItem
											button
											key={beast.species}
											onClick={() => handleSelection(beast.species)}
										>
											<ListItemText primary={beast.species} />
										</ListItem>
									)
							)}
							<hr className={classes.divider} />
						</React.Fragment>
					))}
				</List>
			</div>
		</Drawer>
	);
});

Sidebar.propTypes = {
	className: PropTypes.string,
	isMobile: PropTypes.bool.isRequired
};

Sidebar.defaultProps = {
	className: ''
};

Sidebar.uiName = 'Sidebar';

export default Sidebar;
