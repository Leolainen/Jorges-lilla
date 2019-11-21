import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 12
	}
}));

const TableHeader = React.forwardRef(function TableHeader(props, ref) {
	const {
		//props
		className,
		...other
	} = props;

	const classes = useStyles();

	return (
		<div ref={ref} className={classnames(classes.root, className)} {...other}>
			{children}
		</div>
	);
});

TableHeader.propTypes = {
	className: PropTypes.string
};

TableHeader.defaultProps = {
	className: ''
};

export default TableHeader;
