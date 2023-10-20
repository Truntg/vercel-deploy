/* eslint-disable react/prop-types */
/*Context 
1. tạo context object
2.tạo provider component từ context
3. dùng PC để bao những C cần chia sẻ state
4.lấy state từ context và C muốn dùng*/
import { createContext, useState } from "react";

export const AppContext = createContext({
    isLogin: false,
    setIsLogin: () => {},
});


export const AppContextProvider = (props) => {

    const [isLogin, setIsLogin] = useState(false);

    return <AppContext.Provider value={{isLogin, setIsLogin,}}>
        {props.children}
    </AppContext.Provider>
};