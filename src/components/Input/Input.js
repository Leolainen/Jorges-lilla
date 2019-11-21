import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import InputBase from '../InputBase';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: `0 ${theme.spacing(1)}px`,
		backgroundColor: 'inherit',
		borderRadius: 2
	}
}));

const Input = React.forwardRef(function Input(props, ref) {
	const { className, children, ...other } = props;

	const classes = useStyles();

	return (
		<InputBase ref={ref} className={classnames(classes.root, className)} {...other}>
			{children}
		</InputBase>
	);
});

Input.propTypes = {
	className: PropTypes.string
};

Input.defaultProps = {
	className: ''
};

Input.uiName = 'Input';

export default Input;
