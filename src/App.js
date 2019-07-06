import React, { useEffect } from 'react';

import { useAppContext } from './containers/AppContext';
import { SET_CURRENT_ENTRY, SET_ENTRIES } from './containers/AppContext/constants';
import Page from './containers/Page';

import AttributesBlock from './blocks/AttributesBlock';
import BodypartsBlock from './blocks/BodypartsBlock';
import CombatBlock from './blocks/CombatBlock';
import AbilitiesBlock from './blocks/AbilitiesBlock';

import bestiaryData from './data/bestiary';

import Box from './components/Box';
import Card from './components/Card';
import CardMedia from './components/CardMedia';
import CardContent from './components/CardContent';
import Typography from './components/Typography';
import Grid from './components/Grid';
import VerticalRhythm from './components/VerticalRhythm';

import Loader from './components/Loader';

import { isEmpty } from './utils/helpers';

const App = (props) => {
	const [ { currentEntry }, dispatch ] = useAppContext();

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

	/* 
    Dynamically imports all image assets
    https://webpack.js.org/guides/dependency-management/#require-context
  */
	function importAll(r) {
		let parsedImages = {};
		r.keys().map((image) => {
			parsedImages[image.replace('./', '')] = r(image);
		});

		return parsedImages;
	}

	const images = importAll(require.context('./assets/images/', false, /\.(png|PNG)$/));

	return (
		<Page>
			{isEmpty(currentEntry) ? (
				<Loader />
			) : (
				<Grid component="main" container spacing={3}>
					<Grid item xs={12} md={6}>
						<Card>
							<CardMedia
								component="img"
								alt={currentEntry.species}
								height="500"
								image={images[`${currentEntry.img_name}.PNG`]}
								title={currentEntry.species}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{currentEntry.species}
								</Typography>
								<Box mt={4} />
								<Typography>{currentEntry.description}</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12} md={6}>
						<VerticalRhythm spacing={4}>
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
									<Typography gutterBottom variant="h6" component="h3">
										Grundläggande information
									</Typography>
									<AttributesBlock attributes={currentEntry.basic_info} />
								</CardContent>
							</Card>
						</VerticalRhythm>
					</Grid>

					<Grid item xs={12} md={6}>
						<Card>
							<CardContent>
								<Grid item container xs={12}>
									<Grid item xs={12}>
										<Typography gutterBottom variant="h6" component="h3">
											Kroppspoäng
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography>
											TKP-sys: {currentEntry.hitpoints.total_hitpoints_system}
										</Typography>
										<Typography>TKP: {currentEntry.hitpoints.tkp}</Typography>
									</Grid>
									<Grid item xs={12}>
										<BodypartsBlock bodyparts={currentEntry.bodypart} />
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12} md={6}>
						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Strid
								</Typography>
								<CombatBlock attacks={currentEntry.combat} />
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12} md={6}>
						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Färdigheter
								</Typography>
								<CombatBlock attacks={currentEntry.skills} />
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12} md={6}>
						<Card>
							<CardContent>
								<Typography gutterBottom variant="h6" component="h3">
									Förmågor
								</Typography>
								<AbilitiesBlock abilities={currentEntry.abilities} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			)}
		</Page>
	);
};

App.uiName = 'App';

export default App;
