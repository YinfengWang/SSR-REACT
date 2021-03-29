import { GET_LOGIN_STATUS, LOGIN, LOGOUT } from './constants';

const getLoginStatusActionCreator = (isLogin) => ({
    type: GET_LOGIN_STATUS,
    isLog: isLogin
});

export const getLoginStatusAction = () => {
    return (dispatch, getState, instanceAxios) => {
        return instanceAxios.get('/api/isLogin')
            .then((res) => {
                dispatch(getLoginStatusActionCreator(res.data.data.login));
            }).catch((err) => {
                console.log(err)
            });
    }
}

const loginActionCreator = (Login) => ({
    type: LOGIN,
    isLog: Login
});

export const loginAction = () => {
    return (dispatch, getState, instanceAxios) => {
        return instanceAxios.get('/api/Login')
            .then((res) => {
                 dispatch(loginActionCreator(res.data.data.login));
            }).catch((err) => {
                console.log(err)
            });
    }
}

const logOutActionCreator = (logOut) => ({
    type: LOGOUT,
    isLog: logOut
});

export const logOutAction = () => {
    return (dispatch, getState, instanceAxios) => {
        return instanceAxios.get('/api/LogOut')
            .then((res) => {
                dispatch(logOutActionCreator(!res.data.data.logout));
            }).catch((err) => {
                console.log(err)
            });
    }
}