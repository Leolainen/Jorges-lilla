const styles = (theme) => ({
	'@global': {
		html: {
			WebkitFontSmoothing: 'antialiased', // Antialiasing.
			MozOsxFontSmoothing: 'grayscale', // Antialiasing.
			// Change from `box-sizing: content-box` so that `width`
			// is not affected by `padding` or `border`.
			boxSizing: 'border-box',
			'&:not(.router-transitioning)': {
				// Enable smooth scrolling for browsers that support it.
				scrollBehavior: 'smooth'
			}
		},
		'*, *::before, *::after': {
			boxSizing: 'inherit'
		},
		body: {
			/* ...theme.typography.body1, */
			margin: 0 // Remove the margin in all browsers.
			/* color: theme.palette.text.primary */
		},
		'strong, b': {
			/* fontWeight: theme.typography.fontWeightMedium */
		},
		img: {
			maxWidth: '100%'
		},
		a: {
			color: 'inherit'
		},
		p: {
			/* ...theme.typography.body1 */
		}
	}
});

export default styles;
