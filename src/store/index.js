import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Slices/Userslice";

const store=configureStore({
    reducer:{
        users:Userslice
    },
})
export default store;