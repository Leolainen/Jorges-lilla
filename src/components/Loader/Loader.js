import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh'
	}
}));

const Loader = React.forwardRef(function Loader(props, ref) {
	const { className, children, ...other } = props;

	const classes = useStyles();

	return (
		<div ref={ref} className={classnames(classes.root, className)} {...other}>
			<CircularProgress />
		</div>
	);
});

Loader.propTypes = {
	className: PropTypes.string
};

Loader.defaultProps = {
	className: ''
};

Loader.uiName = 'Loader';

export default Loader;
