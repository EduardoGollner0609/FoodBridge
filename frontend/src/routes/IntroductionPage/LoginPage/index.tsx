import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as authService from '../../../services/auth-service';

export default function LoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
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

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);
        authService.loginRequest(requestBody).then(
            (response) => {
                authService.saveAccessToken(response.data.access_token);
                navigate("/community/home");
            });
    }

    useEffect(() => {
        if (authService.isAuthenticated()) {
            navigate("/community")
        }
    }, []);

    return (
        <main>
            <section id="section-login-page">
                <div className="login-page-content container">
                    <div className="card-login">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-item-input">
                                <label>Email</label>
                                <FormInput {...formData.username}
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange} />
                                <div className="form-error">{formData.username.message}</div>
                            </div>
                            <div className="form-item-input">
                                <label>Senha</label>
                                <FormInput {...formData.password}
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange} />
                                <div className="form-error">{formData.password.message}</div>
                            </div>
                            <button onClick={handleSubmit}>Login</button>
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