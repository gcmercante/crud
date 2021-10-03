
import { useSearch } from '../hooks/useSearch';
import api from '../services/api';

export function Search(props) {
    const { setDevs, values, searchString } = useSearch();

    async function handleSearch(ev) {
        ev.preventDefault();
        
        let route = '/developers?';
        Object.entries(values).forEach(([key, value]) => {
            if(value !== '' && value !== undefined && searchString !== '') {
                route = route + `${value}=${searchString}&`;
            }
        })
        const result = await api.get(route);
        setDevs(result);
    }
    return (
        <form id="Search" onSubmit={ev => handleSearch(ev)}>
            <div>
                {props.children}
            </div>
        </form>
    )
}