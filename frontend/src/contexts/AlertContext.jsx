import { createContext, useState } from 'react';

export const AlertContext = createContext({});

export function AlertContextProvider(props) {
    const [ showAlert, setShowAlert ] = useState(false);


    const allStates = {
        showAlert, setShowAlert
    };
    return (
        <AlertContext.Provider value={ allStates }>
            { props.children }
        </AlertContext.Provider>
    )
}