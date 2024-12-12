import { useState } from 'react';
import { UserInsertDTO } from '../../../models/User';
import './styles.css';

export default function RegisterPage() {

    const [userInsert, setUserInsert] = useState<UserInsertDTO>({
        id: 0,
        name: '',
        address: '',
        phone: '',
        birthDate: '',
        email: '',
        password: '',
    });

    function submit(event: any) {
        event.preventDefault();
        console.log(userInsert);
    }
    
    return (
        <main>
            <section id="section-register-page">
                <div className="register-page-content container">
                    <div className="card-register">
                        <h2>Cadastro</h2>
                        <form >
                            <div className="form-item-input">
                                <label>Nome</label>
                                <input
                                    name="name"
                                    type="text"
                                    value={userInsert.name}
                                    placeholder='Digite seu nome'
                                    onChange={(event) => { setUserInsert({ ...userInsert, name: event.target.value }) }} />
                            </div>
                            <div className="form-item-input">
                                <label>Data de Nascimento</label>
                                <input name="birthDate"
                                    type="date"
                                    value={userInsert.birthDate}
                                    onChange={(event) => { setUserInsert({ ...userInsert, birthDate: event.target.value }) }} />
                            </div>
                            <div className="form-item-input">
                                <label>Número</label>
                                <input name="phone"
                                    type="text"
                                    value={userInsert.phone}
                                    placeholder='Digite seu número'
                                    onChange={(event) => { setUserInsert({ ...userInsert, phone: event.target.value }) }} />
                            </div>
                            <div className="form-item-input">
                                <label>Endereço</label>
                                <input
                                    name="address"
                                    type="text"
                                    value={userInsert.address}
                                    placeholder='Digite seu endereço'
                                    onChange={(event) => { setUserInsert({ ...userInsert, address: event.target.value }) }} />
                            </div>
                            <div className="form-item-input">
                                <label>Email</label>
                                <input name="email"
                                    type="text"
                                    value={userInsert.email}
                                    placeholder='Digite seu email'
                                    onChange={(event) => { setUserInsert({ ...userInsert, email: event.target.value }) }} />
                            </div>
                            <div className="form-item-input">
                                <label>Senha</label>
                                <input name="password"
                                    type="password"
                                    value={userInsert.password}
                                    placeholder='Digite sua senha'
                                    onChange={(event) => { setUserInsert({ ...userInsert, password: event.target.value }) }} />
                                <p>* Minimo de 6 caracteres.</p>
                            </div>
                            <button onClick={submit}>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main >
    );
}