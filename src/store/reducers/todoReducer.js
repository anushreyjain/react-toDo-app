import { ADD } from '../actionType'

const initstate = []
const todoReducer = (state= initstate , action) => {
    switch (action.type) {
        case ADD:
            return [...state, {...action.payload}]
        default: 
        return state;
    }
}

export default todoReducer