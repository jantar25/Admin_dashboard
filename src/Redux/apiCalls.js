import { publicRequest } from './requestMethodes';
import {getMarchantsStart,getMarchantsSuccess,getMarchantsFailure} from './marchantsRedux'


// GET ALL MERCHANTS
export const getMarchants = async (dispatch) =>{
    dispatch(getMarchantsStart());
    try {
        const res = await publicRequest.get("/merchant/0/50");
        dispatch(getMarchantsSuccess(res.data));
    } catch (error) {
        dispatch(getMarchantsFailure(error.response.data.message));
        console.log(error);
    }
}

