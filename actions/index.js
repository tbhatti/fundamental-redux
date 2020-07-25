import { SET_DATA } from '../types';

export const setData = (user) => {

	return dispatch => {

		dispatch({
			type: SET_DATA,
			payload: {
				user
			}
		})

	}

}