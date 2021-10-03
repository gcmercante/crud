import { useHistory } from 'react-router-dom';

import { useForm } from '../hooks/useForm';

import { Header, Footer, Form } from '../components';
import api from '../services/api';

import '../styles/editDev.scss';

export default function EditDev() {
    const history = useHistory();
    const { createValues, setCreateValues } = useForm();
    
    async function handleSubmit(ev) {
        ev.preventDefault();

        await api.post('/developers', createValues);
        history.push('/');
    }

    return (
        <main id="edit-container">
            <Header />
            <div className="edit-content">
                <div>
                    <span>
                        Editar o registro do desenvolvedor
                    </span>
                </div>
                <Form onSubmit={handleSubmit} submitbutton="Editar">
                    <input required type="text" placeholder="Nome *" value={ createValues.nome }
                    onChange={ev => setCreateValues({ ...createValues, nome: ev.target.value})}/>
                    <select defaultValue={createValues.sexo} required name="sexo" id="sexo" onChange={ev => setCreateValues({ ...createValues, sexo: ev.target.value})}>
                        <option value="">Sexo *</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="N">Não informar</option>
                    </select>
                    <input required type="number" placeholder="Idade *" value={createValues.idade} 
                    onChange={ev => setCreateValues({ ...createValues, idade: ev.target.value})} />
                    <input required type="text" placeholder="Hobby *" value={createValues.hobby}
                    onChange={ev => setCreateValues({ ...createValues, hobby: ev.target.value})} />
                    <input required type="date"  value={createValues.datanascimento}
                    onChange={ev => setCreateValues({ ...createValues, datanascimento: ev.target.value})} />
                </Form>
            </div>
            <Footer />
        </main>
    )
}