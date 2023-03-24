import React from "react";
import './navbar.css'
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/Slices/Userslice";
const Deleteallusers=()=>{
    const dispatch=useDispatch();
    const Clearall=()=>{
        dispatch(clearAllUsers())
    }
return(
    <>
    <button id="clrall" onClick={Clearall}>Clear All Users</button>
    </>
)
}

export default Deleteallusers;