import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { useAppContext } from './containers/AppContext';
import { SET_CURRENT_ENTRY, SET_ENTRIES } from './containers/AppContext/constants';
import Page from './containers/Page';

import AvatarCard from './blocks/AvatarCard';
import AttributesBlock from './blocks/AttributesBlock';
import BodypartsBlock from './blocks/BodypartsBlock';
import CombatBlock from './blocks/CombatBlock';
import AbilitiesBlock from './blocks/AbilitiesBlock';

import bestiaryData from './data/bestiary';

import Card from './components/Card';
import CardContent from './components/CardContent';
import Typography from './components/Typography';

import Loader from './components/Loader';

import { isEmpty } from './utils/helpers';

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

const App = (props) => {
	const [ { currentEntry }, dispatch ] = useAppContext();
	const classes = useStyles();

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
		<Page>
			{isEmpty(currentEntry) ? (
				<Loader />
			) : (
				<div className={classes.root}>
					<div className={classes.column}>
						<AvatarCard entry={currentEntry} />

						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Grundläggande information
								</Typography>
								<AttributesBlock attributes={currentEntry.basic_info} />
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Strid
								</Typography>
								<CombatBlock attacks={currentEntry.combat} />
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Förmågor
								</Typography>
								<AbilitiesBlock abilities={currentEntry.abilities} />
							</CardContent>
						</Card>
					</div>

					<div className={classes.column}>
						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Grundegenskaper
								</Typography>
								<AttributesBlock attributes={currentEntry.attributes} />
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<div>
									<div>
										<Typography gutterBottom variant="h6" component="h3">
											Kroppspoäng
										</Typography>
									</div>
									<div>
										<Typography>
											TKP-sys: {currentEntry.hitpoints.total_hitpoints_system}
										</Typography>
										<Typography>TKP: {currentEntry.hitpoints.tkp}</Typography>
									</div>
									<div>
										<BodypartsBlock bodyparts={currentEntry.bodypart} />
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Färdigheter
								</Typography>
								<CombatBlock attacks={currentEntry.skills} />
							</CardContent>
						</Card>
					</div>
				</div>
			)}
		</Page>
	);
};

App.uiName = 'App';

export default App;
