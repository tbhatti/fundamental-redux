import { SET_DATA } from '../types';

const initState = {
	todo: {}
}

export default (state = initState, action) => {

	switch(action.type) {
		case SET_DATA :
			return {...state, todo: action.payload.todo}
		default :
			return state
	}

}