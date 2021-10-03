import { createContext, useState } from 'react';

export const DeleteContext = createContext({});

export function DeleteContextProvider(props) {
    const [ deleteDev, setDeleteDev ] = useState('');


    const allStates = {
        deleteDev, setDeleteDev
    };
    return (
        <DeleteContext.Provider value={ allStates }>
            { props.children }
        </DeleteContext.Provider>
    )
}