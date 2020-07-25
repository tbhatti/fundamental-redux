import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../App';

import Counter from '../components/counter';
import Games from '../components/games';


export default () => {
	return (
		<BrowserRouter>
			<Switch>				
			  <Route exact path='/' component={App}/>			  
				<Route path='/games' component={Games}/>
				<Route path='/counter' component={Counter}/>
			</Switch>
		</BrowserRouter>
	)
}