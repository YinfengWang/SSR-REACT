import { CHANGE_HOME_LIST } from './constants';


const getHomeList = (list) => {
    return {
        type: CHANGE_HOME_LIST,
        list
    }
}
export const getHomeListAction = () => {
    return (dispatch,getState,instanceAxios) => {
        return instanceAxios.get('/api/news')
            .then((res) => {
                const list = res.data;
                dispatch(getHomeList(list));
            }).catch((err) => {
                console.log(err)
            });
    }
}