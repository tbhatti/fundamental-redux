import { SET_DATA } from '../types';

export const setData = (todo) => {
	return dispatch => {
		dispatch({
			type: SET_DATA,
			payload: {
				todo
			}
		})
	}
}