import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.main.primary.dark,
		padding: '24px 12px'
	},
	content: {
		color: theme.palette.text.secondary
	}
}));

const TableHeader = (props) => {
	const classes = useStyles();

	return (
		<TableHead className={classes.root}>
			<TableRow>
				<TableCell className={classes.content}>{children}</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeader;
