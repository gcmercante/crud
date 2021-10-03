import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Alert, Modal } from './index';

import { useSearch } from '../hooks/useSearch';
import { useModal } from '../hooks/useModal';
import { useDelete } from '../hooks/useDelete';
import { useAlert } from '../hooks/useAlert';
import { useForm } from '../hooks/useForm';
import api from '../services/api';

import '../styles/dash.scss';

export function Dash() {
    const history = useHistory();
    const { devs, setDevs } = useSearch();
    const { show, setShow } = useModal();
    const { deleteDev, setDeleteDev } = useDelete();
    const { setShowAlert } = useAlert();
    const { setCreateValues } = useForm();

    useEffect(() => {
        async function getAllDevs() {
            const result = await api.get('/developers');
            setDevs(result);
        }

        getAllDevs();
    }, [setDevs]);

    async function handleEdit(id) {
        const result = await api.get('/developers/' + id);
        setCreateValues(result);
        history.push(`/developers/edit/${id}`);
    }

    function handleDelete(id) {
        setShow(true);
        setDeleteDev(id);
    }

    async function handleDeleteModal(alert = false) {
        await api.delete(`/developers/${deleteDev}`);
        const result = await api.get('/developers');
        setDevs(result);
        if(alert) {
            setShow(false);
            setShowAlert(true);
        }
    }

    return (
        <div className="dash-content">
            <ul id="dash">
                <li>
                    <span>Nome</span>
                    <span>Sexo</span>
                    <span>Idade</span>
                    <span>Data de Nascimento</span>
                    <span>Hobby</span>
                    <span></span>
                </li>
                {
                    devs
                    .sort((a, b) => a.nome > b.nome ? 1 : -1)
                    .map((dev, i) => (
                        <li key={i}>
                            <span>{dev.nome}</span>
                            <span>{dev.sexo === 'M' ? 'Masculino' : dev.sexo === 'F' ? 'Feminino' : 'Não informado'}</span>
                            <span>{dev.idade}</span>
                            <span>{dev.datanascimento}</span>
                            <span>{dev.hobby}</span>
                            <span>
                                <button onClick={() => handleEdit(dev.id)}><FontAwesomeIcon icon="edit" /></button>
                                <button onClick={() => handleDelete(dev.id)}><FontAwesomeIcon icon="trash" /></button>
                            </span>
                        </li>
                    ))
                }
            </ul>
            <Modal
                show={show}
                title="Deletar desenvolvedor"
                content="Tem certeza que deseja deletar esse desenvolvedor do sistema?"
                buttons={[{name: 'Cancelar', color: 'primary', action: 'close'}, {name: 'Deletar', color: 'warning', action: () => handleDeleteModal(true)}]}
                onClose={() => setShow(false)}
            />
            <Alert timeOut={10} content="Desenvolvedor deletado com sucesso" warning />
        </div>
    )
}