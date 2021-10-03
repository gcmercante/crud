import { createContext, useState } from 'react';

export const FormContext = createContext({});

export function FormContextProvider(props) {
    const [createValues, setCreateValues] = useState({
        nome: '',
        idade: '',
        sexo: '',
        hobby: '',
        datanascimento: '',
    });


    const allStates = {
        createValues, setCreateValues
    };
    return (
        <FormContext.Provider value={ allStates }>
            { props.children }
        </FormContext.Provider>
    )
}