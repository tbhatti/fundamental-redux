import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import GetTodos from '../components/todos/get-todos';


export default () => {
	return (
		<BrowserRouter>
			<Switch>				
			  <Route exact path='/' component={App}/>			  
				<Route path='/todos' component={GetTodos}/>
			</Switch>
		</BrowserRouter>
	)
}