import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import TableCell from '../../components/TableCell';
import TableRow from '../../components/TableRow';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import Typography from '../../components/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: `${theme.spacing(4)} 0`
	},
	label: {
		textTransform: 'capitalize',
		fontWeight: 600
	}
}));

const BodypartsCard = React.forwardRef(function BodypartsCard(props, ref) {
	const { className, bodyparts, hitpoints, children, ...other } = props;
	const classes = useStyles();

	return (
		<Card>
			<CardContent>
				<div>
					<div>
						<Typography gutterBottom variant="h6" component="h3">
							Kroppspoäng
						</Typography>
					</div>
					<div>
						<Typography>TKP-sys: {hitpoints.total_hitpoints_system}</Typography>
						<Typography>TKP: {hitpoints.tkp}</Typography>
					</div>
					<div>
						<Table ref={ref} className={classnames(classes.root, className)} {...other}>
							<TableHead>
								<TableRow>
									<TableCell variant="head">Kroppsdel</TableCell>
									<TableCell variant="head">Tärning</TableCell>
									<TableCell variant="head">KP</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{bodyparts.map((bodypart) => (
									<TableRow key={bodypart.name}>
										<TableCell component="th" scope="row" className={classes.label}>
											{bodypart.name}
										</TableCell>
										<TableCell component="th" scope="row" align="right">
											{bodypart.dice}
										</TableCell>
										<TableCell component="th" scope="row" align="right">
											{bodypart.hp}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</CardContent>
		</Card>
	);
});

BodypartsCard.propTypes = {
	bodyparts: PropTypes.arrayOf(PropTypes.object).isRequired,
	hitpoints: PropTypes.object.isRequired,
	className: PropTypes.string
};

BodypartsCard.defaultProps = {
	className: ''
};

BodypartsCard.uiName = 'BodypartsCard';

export default BodypartsCard;
