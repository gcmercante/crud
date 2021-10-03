import { useHistory } from 'react-router-dom';

import { useForm } from '../hooks/useForm';

import { Header, Footer, Form } from '../components';
import api from '../services/api';

import '../styles/createDev.scss';

export default function CreateDev() {
    const history = useHistory();
    const { createValues, setCreateValues } = useForm();

    async function handleSubmit(ev) {
        ev.preventDefault();

        await api.post('/developers', createValues);
        history.push('/');
    }

    return (
        <main id="dev-container">
            <Header />
            <div className="dev-content">
                <div>
                    <span>
                        Registrar um novo desenvolvedor
                    </span>
                </div>
                <Form onSubmit={handleSubmit}  submitbutton="Registrar">
                    <input required type="text" placeholder="Nome *" 
                    onChange={ev => setCreateValues({ ...createValues, nome: ev.target.value})}/>
                    <select required name="sexo" id="sexo" onChange={ev => setCreateValues({ ...createValues, sexo: ev.target.value})}>
                        <option value="">Sexo *</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="N">Não informar</option>
                    </select>
                    <input required type="number" placeholder="Idade *" 
                    onChange={ev => setCreateValues({ ...createValues, idade: ev.target.value})} />
                    <input required type="text" placeholder="Hobby *" 
                    onChange={ev => setCreateValues({ ...createValues, hobby: ev.target.value})} />
                    <input required type="date" 
                    onChange={ev => setCreateValues({ ...createValues, datanascimento: ev.target.value})} />
                </Form>
            </div>
            <Footer />
        </main>
    )
}