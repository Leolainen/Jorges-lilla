import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

import { useAppContext } from '../AppContext';
import { TOGGLE_SIDEBAR, SET_CURRENT_ENTRY } from '../AppContext/constants';

import { getEntryBySpecies } from '../../api/bestiary';

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
	root: {
		overflowY: 'auto'
	},
	container: {
		marginTop: theme.spacing(8),
		overflowY: 'auto'
	},
	list: {
		width: 250
	},
	divider: {
		opacity: 0.6
	},
	searchBar: {}
}));

const Sidebar = React.forwardRef(function Sidebar(props, ref) {
	const { className, children, ...other } = props;

	const [ { entries }, dispatch ] = useAppContext();

	const classes = useStyles();
	const [ bestiary, setBestiary ] = useState([]);
	const [ ancestry, setAncestry ] = useState([]);

	useEffect(
		() => {
			setBestiary(entries);
		},
		[ entries ]
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

		toggleSidebar();
	};

	return (
		<Drawer anchor="right" ref={ref} className={classnames(classes.root, className)} {...other}>
			<div role="presentation" className={classes.container}>
				<AppBar color="default" position="fixed" className={classes.searchBar}>
					<Toolbar variant="dense">
						<Input
							placeholder="Sök efter art..."
							inputProps={{ 'aria-label': 'Search' }}
							onChange={handleFilter}
						/>
						<IconButton onClick={toggleSidebar}>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<List className={classes.list}>
					{ancestry.map((ancestor) => (
						<React.Fragment key={ancestor}>
							<ListSubHeader disableSticky>{ancestor}</ListSubHeader>
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
	className: PropTypes.string
};

Sidebar.defaultProps = {
	className: ''
};

Sidebar.uiName = 'Sidebar';

export default Sidebar;
