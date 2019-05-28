import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 12
	}
}));

const TableHeader = (props) => {
	const classes = useStyles();

	return <div className={classes.root}>{children}</div>;
};

export default TableHeader;
