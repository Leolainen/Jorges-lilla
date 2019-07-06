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

const AbilitiesBlock = React.forwardRef(function AbilitiesBlock(props, ref) {
	const { className, children, abilities, ...other } = props;

	const classes = useStyles();

	return (
		<Table ref={ref} className={classnames(classes.root, className)} {...other}>
			<TableHead>
				<TableRow>
					<TableCell variant="head">Förmågor</TableCell>
					<TableCell variant="head">FV</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{abilities.map((ability) => (
					<TableRow key={ability.name}>
						<TableCell component="th" scope="row">
							{ability.name}
						</TableCell>
						<TableCell component="th" scope="row">
							{ability.description}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
});

AbilitiesBlock.propTypes = {
	className: PropTypes.string,
	abilities: PropTypes.array.isRequired
};

AbilitiesBlock.defaultProps = {
	className: ''
};

AbilitiesBlock.uiName = 'AbilitiesBlock';

export default AbilitiesBlock;
