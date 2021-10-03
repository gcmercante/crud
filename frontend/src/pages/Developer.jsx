import { Link } from 'react-router-dom';

import { useSearch } from '../hooks/useSearch';
import { Dash, MultiSelect, Header, Footer } from '../components';

import '../styles/developer.scss';

export default function Developer() {
    const { setSearchString } = useSearch();

    return (
        <main id="container">
            <Header>
                <input type="search" placeholder="Procurar um dev" onChange={ev => setSearchString(ev.target.value)}/>
                <MultiSelect />
            </Header>
            <div className="content">
                <Link to="/developers/create">+ Criar Dev</Link>
                <div style={{ clear: 'both' }}></div>
                <Dash></Dash>
            </div>
            <Footer />
        </main>
    )
}