import { createSlice} from '@reduxjs/toolkit'

const marchantsSlice = createSlice({
    name:"marchants",
    initialState:{
        marchants: [],
        isFetching: false,
        error: null,
    },
    reducers:{
        // Get all Marchants
        getMarchantsStart:(state)=>{
            state.isFetching=true;
        },
        getMarchantsSuccess:(state,action)=>{
            state.isFetching=false;
            state.marchants=action.payload;
            state.error=null;
        },
        getMarchantsFailure:(state,error)=>{
            state.isFetching=false;
            state.error=error;
        },

        // Get all Marchants BY search
        searchMarchantsStart:(state)=>{
            state.isFetching=true;
        },
        searchMarchantsSuccess:(state,action)=>{
            state.isFetching=false;
            state.marchants=action.payload;
            state.error=null;
        },
        searchMarchantsFailure:(state,error)=>{
            state.isFetching=false;
            state.error=error;
        },
    }

})


export const {getMarchantsStart,getMarchantsSuccess,getMarchantsFailure,
    searchMarchantsStart,searchMarchantsSuccess,searchMarchantsFailure} = marchantsSlice.actions;
export default marchantsSlice.reducer;