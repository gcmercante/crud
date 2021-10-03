import { createContext, useState } from 'react';

export const SearchContext = createContext({});

export function SearchContextProvider(props) {
    const [ values, setValues ] = useState({
        nome: '',
        sexo: '',
        idade: '',
        datanascimento: '',
        hobby: '',
    });

    const [ display, setDisplay ] = useState('none');

    const [ devs, setDevs ] = useState([]);

    const [ searchString, setSearchString ] = useState('');

    const [ dev, setDev ] = useState({});
    
    const allStates = {
        values, setValues,
        display, setDisplay,
        devs, setDevs,
        searchString, setSearchString,
        dev, setDev
    }

    return (
        <SearchContext.Provider value={ allStates }>
            { props.children }
        </SearchContext.Provider>
    )
}