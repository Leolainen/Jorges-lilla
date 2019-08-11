/**
 * https://github.com/mui-org/material-ui/tree/master/packages/material-ui/src/Fade
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { duration } from '@material-ui/core/styles/transitions';
import withTheme from '@material-ui/core/styles/withTheme';
import { reflow, getTransitionProps } from '@material-ui/core/transitions/utils';
import { useForkRef } from '../utils/reactHelpers';

const styles = {
	entering: {
		opacity: 1,
		transform: 'translate(0, 0)'
	},
	entered: {
		opacity: 1,
		transform: 'translate(0, 0)'
	}
};

const defaultTimeout = {
	enter: duration.enteringScreen,
	exit: duration.leavingScreen
};

/**
 * The Fade & Slide transition is used by the `AppDrawer` App partial component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally
 * and is based on MUI's `Fade` component but with a `transform` style reset.
 */
const FadeSlide = React.forwardRef(function FadeSlide(props, ref) {
	const {
		children,
		in: inProp,
		onEnter,
		onExit,
		style,
		theme: { transitions },
		timeout = defaultTimeout,
		...other
	} = props;

	const handleEnter = (node) => {
		reflow(node); // So the animation always start from the start.

		const transitionProps = getTransitionProps({ style, timeout }, { mode: 'enter' });
		node.style.webkitTransition = transitions.create([ 'opacity', 'transform' ], transitionProps);
		node.style.transition = transitions.create([ 'opacity', 'transform' ], transitionProps);

		if (onEnter) {
			onEnter(node);
		}
	};

	const handleExit = (node) => {
		const transitionProps = getTransitionProps({ style, timeout }, { mode: 'exit' });
		node.style.webkitTransition = transitions.create([ 'opacity', 'transform' ], transitionProps);
		node.style.transition = transitions.create([ 'opacity', 'transform' ], transitionProps);

		if (onExit) {
			onExit(node);
		}
	};

	const handleRef = useForkRef(children.ref, ref);

	return (
		<Transition appear in={inProp} onEnter={handleEnter} onExit={handleExit} timeout={timeout} {...other}>
			{(state, childProps) => {
				return React.cloneElement(children, {
					style: {
						opacity: 0,
						visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
						...style,
						...children.props.style,
						...styles[state]
					},
					ref: handleRef,
					...childProps
				});
			}}
		</Transition>
	);
});

FadeSlide.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool,
	onEnter: PropTypes.func,
	onExit: PropTypes.func,
	style: PropTypes.object,
	theme: PropTypes.object.isRequired,
	timeout: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })
	])
};

FadeSlide.uiName = 'FadeSlide';

export default withTheme(FadeSlide);
