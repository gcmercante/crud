import { useHistory } from 'react-router-dom';
import { Search } from '../components';

import '../styles/header.scss';

export function Header(props) {
    const history = useHistory();
    return (
        <header>
            <div>
                <span onClick={() => history.push('/')}>CRUD</span>
                <Search>
                    { props.children }
                </Search>
            </div>
        </header>
    )
}