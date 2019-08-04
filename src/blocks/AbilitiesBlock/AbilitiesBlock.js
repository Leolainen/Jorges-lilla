import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Typography from '../../components/Typography';

const useStyles = makeStyles((theme) => ({
	root: {},
	content: {
		margin: theme.spacing(4, 0)
	}
}));

const AbilitiesBlock = (props) => {
	const { className, abilities } = props;
	const classes = useStyles();

	return (
		<div className={className}>
			{abilities.map((ability) => (
				<div key={ability.name} className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2">
						{ability.name}
					</Typography>
					<Typography variant="body1" dangerouslySetInnerHTML={{ __html: ability.description_html }} />
				</div>
			))}
		</div>
	);
};

AbilitiesBlock.propTypes = {
	className: PropTypes.string,
	abilities: PropTypes.array.isRequired
};

AbilitiesBlock.defaultProps = {
	className: ''
};

AbilitiesBlock.uiName = 'AbilitiesBlock';

export default AbilitiesBlock;
