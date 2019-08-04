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
	root: {
		margin: `${theme.spacing(4)} 0`
	},
	label: {
		textTransform: 'capitalize',
		fontWeight: 600
	}
}));

const BodypartsBlock = React.forwardRef(function BodypartsBlock(props, ref) {
	const { className, bodyparts, children, ...other } = props;
	const classes = useStyles();

	return (
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
	);
});

BodypartsBlock.propTypes = {
	bodyparts: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string
};

BodypartsBlock.defaultProps = {
	className: ''
};

BodypartsBlock.uiName = 'BodypartsBlock';

export default BodypartsBlock;
