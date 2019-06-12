import React, { useEffect } from 'react';

import { useAppContext } from './containers/AppContext';
import { SET_CURRENT_ENTRY, SET_ENTRIES } from './containers/AppContext/constants';
import Page from './containers/Page';

import bestiaryData from './data/bestiary';

import Card from './components/Card';
import CardMedia from './components/CardMedia';
import CardContent from './components/CardContent';

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

	/* const dynamicImportImage = (imgName) => require.context(`../assets/images/${imgName}.PNG`, false, /\.(png|PNG)$/); */

	// const image = images.find((img) => img === `${currentEntry.img_name}.PNG`);
	console.log('images', images, images[`${currentEntry.img_name}.PNG`]);

	return (
		<Page>
			<Card>
				<CardMedia
					component="img"
					alt={currentEntry.species}
					height="140"
					image={images[`${currentEntry.img_name}.PNG`]}
					title={currentEntry.species}
				/>
			</Card>
		</Page>
	);
};

App.uiName = 'App';

export default App;
