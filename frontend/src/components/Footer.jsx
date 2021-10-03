import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/footer.scss';

export function Footer() {
    return (
        <footer>
            <span>
                &copy; 2021 CRUD by Gabriel Mercante <br />
                Projeto CRUD realizado como teste técnico para a vaga de desenvolvedor
            </span>
            <div>
                <a href="https://github.com/gcmercante"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                <a href="https://www.linkedin.com/in/gabriel-mercante-839b59101/"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            </div>
        </footer>
    )
}