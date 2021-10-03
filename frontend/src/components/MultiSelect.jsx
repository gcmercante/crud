import { useEffect, useRef } from 'react';

import { useSearch } from '../hooks/useSearch';

import '../styles/multiselect.scss';

export function MultiSelect() {
    const { values, setValues, display, setDisplay } = useSearch();

    function handleMultiselect(ev) {
        ev.preventDefault();
        
        if(display === 'none') {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setDisplay('none');
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const ref = useRef(null);
    useOutsideAlerter(ref);

    return (
        <div id="multiselect"  ref={ref}>
            <select onMouseDown={ev => handleMultiselect(ev)}></select>
            <div style={{ display }}>
                <span>Selecione uma opção</span>
                <div className="separator" />
                <label htmlFor="nome">
                    <input 
                        type="checkbox"
                        id="nome"
                        value="nome"
                        onChange={e => setValues({ ...values, nome: values.nome === '' ? e.target.value : '' })}
                    /> 
                    &nbsp;Nome
                </label>
                <label htmlFor="sexo">
                    <input 
                        type="checkbox"
                        id="sexo"
                        value="sexo"
                        onChange={e => setValues({ ...values, sexo: values.sexo === '' ? e.target.value : '' })}
                    /> 
                    &nbsp;Sexo
                </label>
                <label htmlFor="idade">
                    <input 
                        type="checkbox"
                        id="idade"
                        value="idade"
                        onChange={e => setValues({ ...values, idade: values.idade === '' ? e.target.value : ''})}
                    /> 
                    &nbsp;Idade
                </label>
                <label htmlFor="datanascimento">
                    <input 
                        type="checkbox"
                        id="datanascimento"
                        value="datanascimento"
                        onChange={e => setValues({ ...values, datanascimento: values.datanascimento === '' ? e.target.value : '' })}
                    /> 
                    &nbsp;Data de Nascimento
                </label>
                <label htmlFor="hobby">
                    <input 
                        type="checkbox"
                        id="hobby"
                        value="hobby"
                        onChange={e => setValues({ ...values, hobby: values.hobby === '' ? e.target.value : '' })}
                    /> 
                    &nbsp;Hobby
                </label>
            </div>
        </div>
    )
}