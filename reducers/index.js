import { SET_DATA } from '../types';

const initState = {
	user: {}
}

export default (state = initState, action) => {

	switch(action.type) {
		case SET_DATA :
			return {...state, user: action.payload.user}
		default :
			return state
	}

}