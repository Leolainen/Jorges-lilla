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

const AttributesBlock = React.forwardRef(function AttributesBlock(props, ref) {
	const { className, attributes, children, ...other } = props;

	const classes = useStyles();
	return (
		<Table ref={ref} className={classnames(classes.root, className)} {...other}>
			<TableHead>
				<TableRow>
					<TableCell variant="head">Egenskap</TableCell>
					<TableCell variant="head">Värde</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{Object.keys(attributes).map((attribute) => (
					<TableRow key={attribute}>
						<TableCell component="th" scope="row" className={classes.label}>
							{attributes[attribute].label}
						</TableCell>
						<TableCell>{attributes[attribute].value}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
});

AttributesBlock.propTypes = {
	attributes: PropTypes.object.isRequired,
	className: PropTypes.string
};

AttributesBlock.defaultProps = {
	className: ''
};

AttributesBlock.uiName = 'AttributesBlock';

export default AttributesBlock;
