import { createSlice} from '@reduxjs/toolkit'

const clientsSlice = createSlice({
    name:"clients",
    initialState:{
        clients: [],
        isFetching: false,
        error: null,
    },
    reducers:{
        // Get all Marchants
        getClientsStart:(state)=>{
            state.isFetching=true;
        },
        getClientsSuccess:(state,action)=>{
            state.isFetching=false;
            state.clients=action.payload;
            state.error=null;
        },
        getClientsFailure:(state,error)=>{
            state.isFetching=false;
            state.error=error;
        },

        // Get all Marchants BY search
        searchClientsStart:(state)=>{
            state.isFetching=true;
        },
        searchClientsSuccess:(state,action)=>{
            state.isFetching=false;
            state.clients=action.payload;
            state.error=null;
        },
        searchClientsFailure:(state,error)=>{
            state.isFetching=false;
            state.error=error;
        },
    }

})


export const {getClientsStart,getClientsSuccess,getClientsFailure,
    searchClientsStart,searchClientsSuccess,searchClientsFailure} = clientsSlice.actions;
export default clientsSlice.reducer;