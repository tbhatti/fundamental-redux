import React from 'react';
import store from '../../../store'

export default class Games extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		}
		this.getDataHandler = this.getDataHandler.bind(this)		
	}
	getDataHandler () {
		console.log(store.getState().userReducer.user,'HELO DATA')
	}

	render () {
		return (
                <div>Get data
					<button onClick={this.getDataHandler}>Get Data</button>
				</div>
            )
	}
}