export { default } from '@material-ui/core/ExpansionPanel';

export const styles = (theme) => ({
	root: {
		'&$expanded': {
			margin: 0
		},
		'&:before': {
			display: 'none'
		}
	}
});
