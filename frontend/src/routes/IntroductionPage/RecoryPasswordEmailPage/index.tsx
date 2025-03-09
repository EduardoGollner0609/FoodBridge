import { useState } from 'react';
import './styles.css';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import { Link } from 'react-router-dom';
import * as authService from '../../../services/auth-service';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';

export default function RecoveryPasswordEmailPage() {

    const [emailNotFound, setEmailNotFound] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        email: {
            value: "",
            id: "email",
            name: "email",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Email inválido"
        }
    });

    const [emailSent, setEmailSent] = useState<boolean>(false);


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
            console.log(formDataValidated)
            return;
        }

        setIsLoading(true);

        const requestBody = forms.toValues(formData);

        authService.recoverToken(requestBody).then(() => {
            setEmailSent(true);
            setIsLoading(false);
        }).catch(error => {
            if (error.response.status === 404) {
                setEmailNotFound(true);
                setIsLoading(false);
                return;
            }
            const newInputs = forms.setBackendErrors(formData, error.response.data.errors)
            setFormData(newInputs);
            setIsLoading(false);
        })

    }

    return (
        <main>
            <section id="recovery-password-email-section">
                <div className="card-recovery-password-email">
                    {
                        (!emailSent && !isLoading) &&
                        <>
                            <h2>Recuperação de Senha</h2>
                            <form >
                                <div className="form-item-input">
                                    <label>Digite seu Email</label>
                                    <FormInput {...formData.email}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange} />
                                    <div className="form-error">{formData.email.message}</div>
                                </div>
                                {
                                    emailNotFound &&
                                    <div className="form-global-error">
                                        Email não encontrado
                                    </div>
                                }
                                <button onClick={handleSubmit}>Enviar</button>
                            </form>
                        </>
                    }
                    {
                        isLoading &&
                        <div className="recovery-password-loading">
                            <img src={loadingIcon} alt="Carregando" />
                            <p>Enviando email de recuperação</p>
                        </div>

                    }
                    {
                        (emailSent && !isLoading) &&
                    <>
                        <h2>Verifique seu Email</h2>
                        <p className="email-sent-confirm">Um email foi enviado para {formData.email.value}
                            com instruções para definir uma nova senha</p>
                        <Link to="/">Início</Link>
                    </>
                    }
                </div>
            </section>
        </main>
    );
}