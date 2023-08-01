import { createSlice} from '@reduxjs/toolkit'

const transactionsSlice = createSlice({
    name:"transactions",
    initialState:{
        transactions: [],
        isFetching: false,
        error: null,
    },
    reducers:{
        // Get all Marchants
        getTransactionsStart:(state)=>{
            state.isFetching=true;
        },
        getTransactionsSuccess:(state,action)=>{
            state.isFetching=false;
            state.transactions=action.payload;
            state.error=null;
        },
        getTransactionsFailure:(state,error)=>{
            state.isFetching=false;
            state.error=error;
        }
    }

})


export const {getTransactionsStart,getTransactionsSuccess,getTransactionsFailure} = transactionsSlice.actions;
export default transactionsSlice.reducer;