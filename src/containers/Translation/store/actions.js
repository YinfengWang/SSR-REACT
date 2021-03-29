import { TRANSLATION_LIST } from './constanst';

export const translationList = (list) => ({
    type: TRANSLATION_LIST,
    list
})

export const getTranslationList = () => {
    return (dispatch, getState, instanceAxios) => {
        return instanceAxios.get('/api/translations')
            .then((res) => {
                // console.log(res.data.data)
                if (res.data.success)
                    dispatch(translationList(res.data.data));
                else
                    dispatch(translationList([]));

            }).catch((err) => {
                console.log(err)
            });
    }
}