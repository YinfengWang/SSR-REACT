import { GET_LOGIN_STATUS,LOGIN,LOGOUT } from './constants';
const defaultState = {
    isLog: true
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LOGIN_STATUS:
            return{
                ...state,
                isLog:action.isLog
            }
            break;
            case LOGIN:
                return{
                    ...state,
                    isLog:action.isLog
                }
            break;
            case LOGOUT:
                return{
                    ...state,
                    isLog:action.isLog
                }
            break;
        default:
            return state;
            break;
    }
}