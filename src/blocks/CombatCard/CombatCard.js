import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import Table from '../../components/Table';
import TableBody from '../../components/TableBody';
import TableCell from '../../components/TableCell';
import TableHead from '../../components/TableHead';
import TableRow from '../../components/TableRow';
import Typography from '../../components/Typography';

const useStyles = makeStyles((theme) => ({
	root: {}
}));

const CombatCard = React.forwardRef(function CombatCard(props, ref) {
	const { className, children, attacks, title = '', ...other } = props;

	const classes = useStyles();

	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h3">
					{title}
				</Typography>
				<Table ref={ref} className={classnames(classes.root, className)} {...other}>
					<TableHead>
						<TableRow>
							<TableCell variant="head">Namn</TableCell>
							<TableCell variant="head">FV</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{attacks.map((attack) => (
							<TableRow key={attack.name}>
								<TableCell component="th" scope="row">
									{attack.name}
								</TableCell>
								<TableCell component="th" scope="row">
									{attack.skillpoints}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
});

CombatCard.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string
};

CombatCard.defaultProps = {
	className: ''
};

CombatCard.uiName = 'CombatCard';

export default CombatCard;
