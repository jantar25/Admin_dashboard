import { publicRequest } from './requestMethodes';
import {getMarchantsStart,getMarchantsSuccess,getMarchantsFailure,
    searchMarchantsStart,searchMarchantsSuccess,searchMarchantsFailure} from './marchantsRedux'

import {getClientsStart,getClientsSuccess,getClientsFailure,
    searchClientsStart,searchClientsSuccess,searchClientsFailure} from './clientsRedux'


// GET ALL MERCHANTS
export const getMarchants = async (dispatch) =>{
    dispatch(getMarchantsStart());
    try {
        const res = await publicRequest.get("/merchant/0/50");
        dispatch(getMarchantsSuccess(res.data));
    } catch (error) {
        dispatch(getMarchantsFailure(error.payload));
        console.log(error);
    }
}

// GET ALL MERCHANTS BY SEARCH
export const searchMarchants = async (dispatch,search) =>{
    dispatch(searchMarchantsStart());
    try {
        const res = await publicRequest.get(`/merchant/find/${search}/`);
        dispatch(searchMarchantsSuccess(res.data));
    } catch (error) {
        dispatch(searchMarchantsFailure(error.payload));
        console.log(error);
    }
}


// GET ALL CLIENTS
export const getClients = async (dispatch) =>{
    dispatch(getClientsStart());
    try {
        const res = await publicRequest.get("/customer/0/50");
        dispatch(getClientsSuccess(res.data));
    } catch (error) {
        dispatch(getClientsFailure(error.payload));
        console.log(error);
    }
}

// GET ALL CLIENTS BY SEARCH
export const searchClients = async (dispatch,search) =>{
    dispatch(searchClientsStart());
    try {
        const res = await publicRequest.get(`/customer/find/${search}/`);
        dispatch(searchClientsSuccess(res.data));
    } catch (error) {
        dispatch(searchClientsFailure(error.payload));
        console.log(error);
    }
}
