import React from 'react';
import PropTypes from 'prop-types';
import FadeSlide from '../FadeSlide';

const FadeGroup = React.forwardRef(function FadeGroup(props, ref) {
	const { className, children, style = {}, delay = 30, onTransitionEnd, ...other } = props;

	return React.Children.map(children, (child, index) => {
		if (child === null || child === undefined) {
			// This prevents crashing should a child be null or undefined
			return null;
		}

		const isLast = children.length - 1 === index;

		return (
			<FadeSlide
				key={index}
				ref={ref}
				onTransitionEnd={isLast ? onTransitionEnd : null}
				style={{
					...(index > 0 && {
						transitionDelay: index * delay
					}),
					visibility: 'visible', // Makes sure to not hide last child before its turn
					...style
				}}
				{...other}
			>
				{child}
			</FadeSlide>
		);
	});
});

FadeGroup.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	delay: PropTypes.number
};

FadeGroup.defaultProps = {
	className: ''
};

FadeGroup.uiName = 'FadeGroup';

export default FadeGroup;
