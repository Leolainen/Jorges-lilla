import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import isEqual from 'lodash/isEqual';

import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import TableCell from '../../components/TableCell';
import TableRow from '../../components/TableRow';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import Typography from '../../components/Typography';
import FadeGroup from '../../components/FadeGroup';
import FadeSlide from '../../components/FadeSlide';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: `${theme.spacing(4)} 0`
	},
	label: {
		textTransform: 'capitalize',
		fontWeight: 600
	}
}));

const AttributesCard = React.forwardRef(function AttributesCard(props, ref) {
	const { className = '', title = '', attributes, children, ...other } = props;
	const classes = useStyles();
	const [ fade, setFade ] = React.useState(true);
	const [ lastAttributes, setLastAttributes ] = React.useState({});

	const handleFadeOut = () => setFade(false);
	const handleFadeIn = () => setFade(true);
	const handleTransitionEnd = () => {
		if (!fade) {
			setLastAttributes(attributes);
		}
	};

	React.useEffect(() => {
		setLastAttributes(attributes);
	}, []);

	React.useEffect(
		() => {
			handleFadeOut();
		},
		[ attributes ]
	);

	React.useEffect(
		() => {
			handleFadeIn();
		},
		[ lastAttributes ]
	);

	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h3">
					{title}
				</Typography>
				<Table ref={ref} className={classnames(classes.root, className)} {...other}>
					<TableHead>
						<TableRow>
							<TableCell variant="head">Egenskap</TableCell>
							<TableCell variant="head">Värde</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<FadeGroup
							onTransitionEnd={handleTransitionEnd}
							in={fade}
							style={{ transform: 'translate(-20px, 0)' }}
						>
							{Object.values(lastAttributes).map((attribute) => (
								<TableRow key={attribute}>
									<TableCell component="th" scope="row" className={classes.label}>
										{attribute.label}
									</TableCell>
									<TableCell>{attribute.value}</TableCell>
								</TableRow>
							))}
						</FadeGroup>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
});

AttributesCard.propTypes = {
	attributes: PropTypes.object.isRequired,
	className: PropTypes.string,
	title: PropTypes.string
};
AttributesCard.uiName = 'AttributesCard';

export default AttributesCard;
