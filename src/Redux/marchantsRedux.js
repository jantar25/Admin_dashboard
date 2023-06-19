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

    }

})


export const {getMarchantsStart,getMarchantsSuccess,getMarchantsFailure} = marchantsSlice.actions;
export default marchantsSlice.reducer;