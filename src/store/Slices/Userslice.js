import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
         },
        removeUser(state, action) {
            state.splice(action.payload,1);
         },
        clearAllUsers(State, action) {
            return []
         }
    },
})

export default Userslice.reducer ;

export const {addUser,removeUser,clearAllUsers}=Userslice.actions;