import { TRANSLATION_LIST } from './constanst';

const defaultState = {
    list: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case TRANSLATION_LIST:
            return {
                ...state,
                list: action.list
            }
            break;

        default:
            return state;
            break;
    }
}