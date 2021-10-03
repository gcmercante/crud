import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalContextProvider(props) {
    const [ show, setShow ] = useState(false);


    const allStates = {
        show, setShow
    };
    return (
        <ModalContext.Provider value={ allStates }>
            { props.children }
        </ModalContext.Provider>
    )
}