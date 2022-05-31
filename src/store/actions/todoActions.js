import { ADD } from '../actionType';

export const addtodo = (data) => dispatch => {
    return dispatch({
        type: ADD,
        payload: data
    })

}