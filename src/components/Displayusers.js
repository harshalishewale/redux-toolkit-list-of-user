import { useDispatch, useSelector } from "react-redux";
import './navbar.css'
import {Trash} from 'feather-icons-react';
import { removeUser } from "../store/Slices/Userslice";
const Display = () => {
    const data = useSelector((state) => {
        return state.users;
    })
    const dispatch=useDispatch();
    const DltUser=(id)=>{
        dispatch(removeUser(id))
    }
    console.log(data)
    return (
        <>
            {data.map((value, id) => {
                return (
                    <li key={id} id='list'>
                        {value}
                        <button id='dlt'><Trash size='20px' onClick={()=>DltUser(id)} /></button>
                    </li>
                )
            })}
        </>
    )
}
export default Display;