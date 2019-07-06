import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import TableCell from '../../components/TableCell';
import TableRow from '../../components/TableRow';

const useStyles = makeStyles((theme) => ({
	root: {}
}));

const CombatBlock = React.forwardRef(function CombatBlock(props, ref) {
	const { className, children, attacks, ...other } = props;

	const classes = useStyles();

	return (
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
	);
});

CombatBlock.propTypes = {
	className: PropTypes.string
};

CombatBlock.defaultProps = {
	className: ''
};

CombatBlock.uiName = 'CombatBlock';

export default CombatBlock;
