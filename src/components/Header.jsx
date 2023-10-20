/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../store/reducers/home";


const Header = () => {

    // const appContext =  useContext(AppContext);

    const homeStore = useSelector(state => state.home)
    const dispatch = useDispatch();

    const onLoginClick = () => {
        dispatch(setIsLogin(true));
    };

    const onLogoutClick = () =>{
        dispatch(setIsLogin(false));
    };

    return (
        homeStore.isLogin ?( 
        <header>This is navbar <button onClick={onLogoutClick}>Logout</button></header>
    ): (
    <button onClick={onLoginClick}>login</button>
    ));
}

export default Header