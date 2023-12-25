import { publicRequest } from './requestMethodes';
import {getMarchantsStart,getMarchantsSuccess,getMarchantsFailure,
    searchMarchantsStart,searchMarchantsSuccess,searchMarchantsFailure} from './marchantsRedux'

import {getClientsStart,getClientsSuccess,getClientsFailure,
    searchClientsStart,searchClientsSuccess,searchClientsFailure} from './clientsRedux'

import {userLoginStart,userLoginSuccess,userLoginFailure,userLogoutSuccess} from './currentUserRedux'

import {getTransactionsStart,getTransactionsSuccess,getTransactionsFailure} from './transactionRedux'


// GET ALL MERCHANTS
export const getMarchants = async (dispatch) =>{
    dispatch(getMarchantsStart());
    try {
        const res = await publicRequest.get("/merchant/0/50");
        dispatch(getMarchantsSuccess(res.data));
    } catch (error) {
        dispatch(getMarchantsFailure(error.payload));
        console.log(error);
        setTimeout(() => {
            dispatch(getMarchantsFailure(null))
          }, 5000)
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
        setTimeout(() => {
            dispatch(searchMarchantsFailure(null))
          }, 5000)
    }
}

// GET ALL TRANSACTIONS
export const getTransactions = async (dispatch) =>{
    dispatch(getTransactionsStart());
    try {
        const res = await publicRequest.get("/transaction/0/100");
        dispatch(getTransactionsSuccess(res.data));
    } catch (error) {
        dispatch(getMarchantsFailure(error.payload));
        console.log(error);
        setTimeout(() => {
            dispatch(getTransactionsFailure(null))
          }, 5000)
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
        setTimeout(() => {
            dispatch(getClientsFailure(null))
          }, 5000)
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
        setTimeout(() => {
            dispatch(searchClientsFailure(null))
          }, 5000)
    }
}


// LOGIN USER

export const userLogin = async (dispatch,user) =>{
    dispatch(userLoginStart());
    if (user.userCode === 'Admin' && user.password === '123') {
        dispatch(userLoginSuccess({...user,isAdmin:true}));
    } else if (user.userCode === 'Client' && user.password === '123') {
        dispatch(userLoginSuccess({...user,isAdmin:false}));
    } else {
        dispatch(userLoginFailure('Username and/or password incorrecte'))
        setTimeout(() => {
            dispatch(userLoginFailure(null))
          }, 5000)
    }
    // try {
    //     const res = (await publicRequest.post("/user/login",user));
    //     dispatch(userLoginSuccess(user));
    // } catch (error) {
    //     console.log(error.response.data.message)
    //     dispatch(userLoginFailure(error.response.data.message));
    // }
}


export const userLogout = async (dispatch) =>{
    dispatch(userLogoutSuccess());
}