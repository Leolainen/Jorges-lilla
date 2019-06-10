import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

import Avatar from '../components/Avatar';
import Container from '../components/Container';
import Table from '../components/Table';
import TableBody from '../components/TableBody';
import TableHeader from '../components/TableHeader';
import Typography from '../components/Typography';
import Panel from './Panel';

export default (props) => (
	<div className={classes.root}>
		<Avatar>Avatar</Avatar>
		<Container maxWidth="md">
			Container
			<Table>
				<TableHeader>TableHeader</TableHeader>
				<TableBody>TableBody</TableBody>
			</Table>
			<Typography>Typography</Typography>
			<Panel headline="headline" />
		</Container>
	</div>
);
