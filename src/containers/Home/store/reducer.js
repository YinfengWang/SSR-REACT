import { CHANGE_HOME_LIST } from './constants';

const defaultState = {
    newList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_LIST:

            const newState = {
                ...state,
                newList: action.list
            }
            return newState;
        default:
            return state;
    }

}