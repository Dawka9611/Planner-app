
import { LoaderCircle } from '../../components/PageElements/OtherElements/Loader';
import React, {  createContext, useState } from 'react';
import { GetStorage, SetStorage } from './LocalStorage';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [mainLoad, setMainLoad] = useState(true);
    // const user = JSON.parse(localStorage?.user)
    const user = {
        name: "Dawka9611",
        token: "///"
    }

    // const mainLoadH = (cond, infinite) => {
    //     setMainLoad(cond);
    //     if (infinite === true || cond === false) return
    //     setTimeout(() => {
    //         setMainLoad(false)
    //     }, 5000)
    // }

    // appConfig, setAppConfig,
    return (
        <UserContext.Provider value={{ user,mainLoad, setMainLoad }}>
            {children}
            {/* {mainLoad ? <LoaderCircle/> : ''} */}
        </UserContext.Provider>
    )
}

export default UserContext

