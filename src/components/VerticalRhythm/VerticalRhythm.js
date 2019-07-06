import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@material-ui/core/styles/useTheme';

const VerticalRhythm = React.forwardRef(function VerticalRhythm(props, ref) {
	const { className, children, component: Component, spacing, ...other } = props;

	const theme = useTheme();

	return (
		<Component ref={ref} {...other}>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return null;
				}

				if (index === 0) {
					return child;
				}

				return React.cloneElement(child, {
					style: { marginTop: theme.spacing(spacing), ...child.props.style }
				});
			})}
		</Component>
	);
});

VerticalRhythm.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	component: PropTypes.oneOfType([ PropTypes.string, PropTypes.func, PropTypes.object, PropTypes.node ]),
	spacing: PropTypes.number.isRequired
};

VerticalRhythm.defaultProps = {
	className: '',
	component: 'div'
};

VerticalRhythm.uiName = 'VerticalRhythm';

export default VerticalRhythm;
