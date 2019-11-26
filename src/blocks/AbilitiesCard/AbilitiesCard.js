import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import Typography from '../../components/Typography';

const useStyles = makeStyles((theme) => ({
	root: {},
	content: {
		margin: theme.spacing(4, 0)
	}
}));

const AbilitiesCard = (props) => {
	const { className, abilities } = props;
	const classes = useStyles();

	return (
		<Card className={className}>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h3">
					Förmågor
				</Typography>

				<div>
					{abilities.map((ability, idx) => (
						<div key={`${ability.name}_${idx}`} className={classes.content}>
							<Typography gutterBottom variant="h5" component="h2">
								{ability.name}
							</Typography>

							<Typography
								variant="body1"
								dangerouslySetInnerHTML={{ __html: ability.description_html }}
							/>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

AbilitiesCard.propTypes = {
	className: PropTypes.string,
	abilities: PropTypes.array.isRequired
};

AbilitiesCard.defaultProps = {
	className: ''
};

AbilitiesCard.uiName = 'AbilitiesCard';

export default AbilitiesCard;
