import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

export function useForm() {
    return useContext(FormContext);
}