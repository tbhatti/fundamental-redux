import React from 'react';
import {setData} from '../../../actions';
import {connect} from 'react-redux';

class Counter extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			email: ''
		}
		this.setDataHandler = this.setDataHandler.bind(this)		
		this.setName = this.setName.bind(this)
		this.setEmail = this.setEmail.bind(this)
	}
	setDataHandler () {
		this.props.dispatch(setData({name: this.state.name, email: this.state.email}))
	}
	setName (event)  {
		 this.setState({name: event.target.value})
	 }

	 setEmail (event)  {
		this.setState({email: event.target.value})
	}

	render () {
		return (
                <div>Set Data
					 <input type="text" placeholder="Name" onChange={this.setName} />
					 <input type="text" placeholder="Email" onChange={this.setEmail} />
					<button onClick={this.setDataHandler}>Set Data</button>
				</div>
            )
	}
}
export default connect(state => state)(Counter);