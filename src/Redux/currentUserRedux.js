import { createSlice} from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
    name:"currentUser",
    initialState:{
        currentUser: null,
        error: null,
        isFetching: false,
    },
    reducers:{
        userLoginStart:(state)=>{
            state.isFetching=true
        },
        userLoginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload
            state.error=null;
        },
        userLoginFailure:(state,error)=>{
            state.isFetching=false;
            state.error=error;
        },
        userLogoutSuccess:(state)=>{
            state.currentUser= null;
        },
    }
})

export const {userLoginStart,userLoginSuccess,userLoginFailure,userLogoutSuccess} = currentUserSlice.actions;
export default currentUserSlice.reducer;