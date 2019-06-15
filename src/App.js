import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { useAppContext } from './containers/AppContext';
import { SET_CURRENT_ENTRY, SET_ENTRIES } from './containers/AppContext/constants';
import Page from './containers/Page';

import AttributesBlock from './blocks/AttributesBlock';

import bestiaryData from './data/bestiary';

import Card from './components/Card';
import CardMedia from './components/CardMedia';
import CardContent from './components/CardContent';
import Typography from './components/Typography';
import Table from './components/Table';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import TableCell from './components/TableCell';
import TableRow from './components/TableRow';
import Loader from './components/Loader';

import { isEmpty } from './utils/helpers';

const useStyles = makeStyles((theme) => ({
	root: {},
	wrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: 'auto'
	}
	/* .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "card desc" "card desc" "second desc" "second desc" "body desc" "body ." ". .";
  }
  
  .card { grid-area: card; }
  
  .desc { grid-area: desc; }
  
  .second { grid-area: second; }
  
  .body { grid-area: body; } */
}));

const App = (props) => {
	const { className, children, ...other } = props;
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
				<main className={classes.wrapper}>
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
							<AttributesBlock attributes={currentEntry.attributes} />
						</CardContent>
					</Card>
				</main>
			)}
		</Page>
	);
};

App.uiName = 'App';

export default App;
