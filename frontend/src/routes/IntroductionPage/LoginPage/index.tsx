import { Link } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';

export default function LoginPage() {

    const [formData, setFormData] = useState<any>({
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
    });

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
    }


    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }


    return (
        <main>
            <section id="section-login-page">
                <div className="login-page-content container">
                    <div className="card-login">
                        <h2>Login</h2>
                        <form>
                            <div className="form-item-input">
                                <label>Email</label>
                                <FormInput {...formData.email}
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange} />
                                <div className="form-error">{formData.email.message}</div>
                            </div>
                            <div className="form-item-input">
                                <label>Senha</label>
                                <FormInput {...formData.password}
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange} />
                                <div className="form-error">{formData.password.message}</div>
                            </div>
                            <button>Login</button>
                        </form>
                        <div className="card-login-reset-password">
                            <Link to="/recovery/password">
                                Esqueceu a senha? Clique Aqui
                            </Link>
                        </div>
                    </div>
                    <div className="card-login-invite-register-space">
                        <Link to="/register">
                            Clique aqui para se cadastrar
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}