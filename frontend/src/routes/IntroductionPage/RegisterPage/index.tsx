import { useState } from 'react';

import './styles.css';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as userService from '../../../services/user-service';
import { useNavigate } from 'react-router-dom';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';


export default function RegisterPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(formEmpty);

    const [loading, setLoading] = useState<boolean>(false);

    function formEmpty() {
        return {
            name: {
                value: "",
                id: "name",
                name: "name",
                type: "text",
                placeholder: "Nome",
                validation: function (value: string) {
                    return /^.{5,80}$/.test(value);
                },
                message: "Favor informar um nome de 5 a 80 caracteres",
            },
            phone: {
                value: "",
                id: "phone",
                name: "phone",
                type: "text",
                placeholder: "Número",
                validation: function (value: string) {
                    return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(value);
                },
                message: "Número inválido",
            },
            address: {
                value: "",
                id: "address",
                name: "address",
                type: "text",
                placeholder: "CEP",
                validation: function (value: string) {
                    return /^.{8,}$/.test(value);;
                },
                message: "Campo requerido",
            },
            birthDate: {
                value: "",
                id: "birthDate",
                name: "birthDate",
                type: "date",
                validation: function (value: string) {
                    return new Date(value).getTime() <= Date.now();
                },
                message: "Data inválida",
            },
            email: {
                value: "",
                id: "email",
                name: "email",
                type: "text",
                placeholder: "Email",
                validation: function (value: string) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: "Email inválido",
            },
            password: {
                value: "",
                id: "password",
                name: "password",
                type: "password",
                placeholder: "Senha",
                validation: function (value: string) {
                    return /^.{6,30}$/.test(value);
                },
                message: "A senha deve ter entre 6 a 30 caracteres",
            },
        };
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }


    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();


        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        setLoading(true);

        const requestBody = forms.toValues(formData);

        userService.insert(requestBody).then(() => {
            navigate("/home");
        }).catch(error => {
            setLoading(false);
            const newInputs = forms.setBackendErrors(formData, error.response.data.errors);
            setFormData(newInputs);
        });

        setFormData(formEmpty);
    }


    return (
        <main>
            <section id="section-register-page">
                <div className="register-page-content container">
                    <div className="card-register">
                        <h2>Cadastro</h2>
                        {
                            !loading ?
                                <form onSubmit={handleSubmit}>
                                    <div className="form-item-input">
                                        <label>Nome</label>
                                        <FormInput
                                            {...formData.name}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange}
                                        />
                                        <div className="form-error">{formData.name.message}</div>
                                    </div>

                                    <div className="form-item-input">
                                        <label>Data de Nascimento</label>
                                        <FormInput   {...formData.birthDate}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange}
                                        />
                                        <div className="form-error">{formData.birthDate.message}</div>
                                    </div>

                                    <div className="form-item-input">
                                        <label>Número</label>
                                        <FormInput {...formData.phone}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange}
                                        />
                                        <div className="form-error">{formData.phone.message}</div>
                                    </div>

                                    <div className="form-item-input">
                                        <label>CEP</label>
                                        <FormInput
                                            {...formData.address}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange}
                                        />
                                        <div className="form-error">{formData.address.message}</div>
                                    </div>

                                    <div className="form-item-input">
                                        <label>Email</label>
                                        <FormInput
                                            {...formData.email}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange}
                                        />
                                        <div className="form-error">{formData.email.message}</div>
                                    </div>

                                    <div className="form-item-input">
                                        <label>Senha</label>
                                        <FormInput {...formData.password}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange}
                                        />
                                        <p>* Minimo de 6 caracteres.</p>
                                        <div className="form-error">{formData.password.message}</div>
                                    </div>

                                    <button onClick={handleSubmit}>Cadastrar</button>
                                </form>
                                :
                                <div className="card-register-loading">
                                    <img src={loadingIcon} alt="Carregando" />
                                    <p>Realizando cadastro...</p>
                                </div>
                        }
                    </div>
                </div>
            </section>
        </main >
    );
}