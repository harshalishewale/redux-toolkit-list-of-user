import React from "react"
import { UserData } from "../api";
import Deleteallusers from "./Deleteallusers";
import './navbar.css';
import { useDispatch } from "react-redux";
import { addUser } from "../store/Slices/Userslice";
import Display from "./Displayusers";
const UserDetails = () => {
    const dispatch = useDispatch();
    const AddNewUser = (payload) => {
        console.log(payload);
        dispatch(addUser(payload))
    }
    return (
        <>
            <div>
                <div id='out'>
                    <div id='content'>List of User Details</div>
                    <button id='content' className="btn" onClick={() => AddNewUser(UserData())}>Add New Users</button>
                    <ul>
                        <Display />
                    </ul>
                    <Deleteallusers />
                </div>

            </div>
        </>
    )
}
export default UserDetails;