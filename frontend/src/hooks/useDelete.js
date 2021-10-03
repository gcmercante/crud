import { useContext } from 'react';
import { DeleteContext } from '../contexts/DeleteContext';

export function useDelete() {
    return useContext(DeleteContext);
}