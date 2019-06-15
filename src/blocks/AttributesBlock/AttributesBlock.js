import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ExpansionPanel from '../../components/ExpansionPanel';
import ExpansionPanelSummary from '../../components/ExpansionPanelSummary';
import ExpansionPanelDetails from '../../components/ExpansionPanelDetails';
import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import TableCell from '../../components/TableCell';
import TableRow from '../../components/TableRow';
import Typography from '../../components/Typography';

const useStyles = makeStyles((theme) => ({
	root: {}
}));

const AttributesBlock = React.forwardRef(function AttributesBlock(props, ref) {
	const { className, attributes, children, ...other } = props;

	const classes = useStyles();

	return (
		<ExpansionPanel elevation={0} defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="grundegenskaper">
				<Typography gutterBottom variant="h5" component="h2">
					Grundegenskaper
				</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Table ref={ref} className={classnames(classes.root, className)} {...other}>
					<TableHead>
						<TableRow>
							<TableCell>Grundegenskap</TableCell>
							<TableCell>Värde</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.keys(attributes).map((attribute) => (
							<TableRow key={attribute}>
								<TableCell component="th" scope="row">
									{attribute}
								</TableCell>
								<TableCell>{attributes[attribute]}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</ExpansionPanelDetails>
		</ExpansionPanel>
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
