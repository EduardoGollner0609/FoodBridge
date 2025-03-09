import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as authService from '../../../services/auth-service';
import * as userService from '../../../services/user-service';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';

export default function LoginPage() {

    const navigate = useNavigate();

    const [submitResponseFail, setSubmitResponseFail] = useState(false);

    const [loading, setIsLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            autoComplete: "username",
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
            autoComplete: "current-password",
            validation: function (value: string) {
                return /^.{6,30}$/.test(value);
            },
            message: "A senha deve ter entre 6 a 30 caracteres",
        },
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
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

        setIsLoading(true);

        const requestBody = forms.toValues(formData);

        authService.loginRequest(requestBody).then(
            (response) => {
                authService.saveAccessToken(response.data.access_token);

                userService.findMe().then(response => {
                    userService.saveUserLogged(response.data);
                    navigate("/community/home");
                });

            }).catch(() => {
                setSubmitResponseFail(true);
                setIsLoading(false);
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
                        {
                            !loading ?
                                <>
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
                                    {submitResponseFail && (
                                        <div className="form-global-error login-invalid-credentials">
                                            <p>  Usuário ou senha inválidos</p>
                                        </div>)
                                    }
                                    <div className="card-login-reset-password">
                                        <Link to="/email-sent-recovery-password">
                                            Esqueceu a senha? Clique Aqui
                                        </Link>
                                    </div>
                                </>
                                :
                                <div className="card-login-loading">
                                    <img src={loadingIcon} alt="Carregando..." />
                                    <p>Realizando Login...</p>
                                </div>
                        }
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