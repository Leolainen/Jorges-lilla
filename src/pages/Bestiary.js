import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import isEmpty from 'lodash/isEmpty';

import AvatarCard from '../blocks/AvatarCard';
import AttributesCard from '../blocks/AttributesCard';
import BodypartsCard from '../blocks/BodypartsCard';
import CombatCard from '../blocks/CombatCard';
import AbilitiesCard from '../blocks/AbilitiesCard';

import { useAppContext } from '../containers/AppContext';
import { SET_CURRENT_ENTRY, SET_ENTRIES } from '../containers/AppContext/constants';
import Page from '../containers/Page';

import Loader from '../components/Loader';

import bestiaryData from '../data/bestiary';

/* import { isEmpty } from '../utils/helpers'; */

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: theme.breakpoints.values.sm,
		marginLeft: 'auto',
		marginRight: 'auto',

		'& > *': {
			flexBasis: '50%'
		},

		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			maxWidth: 'initial'
		}
	},
	column: {
		display: 'flex',
		flexDirection: 'column',

		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

const Bestiary = (props) => {
	const [ { currentEntry }, dispatch ] = useAppContext();
	const classes = useStyles(props);

	/* Initialize bestiary */
	useEffect(() => {
		dispatch({
			type: SET_ENTRIES,
			payload: bestiaryData
		});
		dispatch({
			type: SET_CURRENT_ENTRY,
			payload: bestiaryData[0]
		});
	}, []);

	return (
		<React.Fragment>
			{isEmpty(currentEntry) ? (
				<Loader />
			) : (
				<div className={classes.root}>
					<div className={classes.column}>
						<AvatarCard entry={currentEntry} />
						<AttributesCard title="Grundläggande information" attributes={currentEntry.basic_info} />
						<CombatCard title="Strid" attacks={currentEntry.combat} />
						<AbilitiesCard abilities={currentEntry.abilities} />
					</div>

					<div className={classes.column}>
						<AttributesCard title="Grundegenskaper" attributes={currentEntry.basic_info} />
						<BodypartsCard hitpoints={currentEntry.hitpoints} bodyparts={currentEntry.bodypart} />
						<CombatCard title="Färdigheter" attacks={currentEntry.skills} />
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

Bestiary.uiName = 'Bestiary';

export default Bestiary;
