import { publicRequest } from './requestMethodes';
import {getMarchantsStart,getMarchantsSuccess,getMarchantsFailure} from './marchantsRedux'


// GET ALL MERCHANTS
export const getProperties = async (dispatch) =>{
    dispatch(getMarchantsStart());

    try {
        const res = await publicRequest.get("/property");
        dispatch(getMarchantsSuccess(res.data));
    } catch (error) {
        dispatch(getMarchantsFailure(error.response.data.message));
        console.log(error);
    }
}