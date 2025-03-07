import { useState } from 'react';
import './styles.css';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import { Link, useParams } from 'react-router-dom';
import * as authService from '../../../services/auth-service';
import CardMessage from '../../../components/CardMessage';

export default function RecoveryPasswordPage() {

    const params = useParams();

    const [passwordChanged, setPasswordChanged] = useState<boolean>(false);
    const [cardMessage, setCardMessage] = useState<string>('');

    const [formData, setFormData] = useState({
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
        }
    });


    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = {
            token: params.token,
            password: formData.password.value

        }

        authService.saveNewPassword(requestBody).then(() => {
            setPasswordChanged(true);
        }).catch(error => {
            if (error.response.status === 404) {
                console.log(error)
                setCardMessage(error.response.data.message);
                return;
            }
            const newInputs = forms.setBackendErrors(formData, error.response.data.errors);
            setFormData(newInputs);
        });

    }


    return (
        <main>
            <section id="recovery-password-section">
                <div className="card-recovery-password">
                    {
                        !passwordChanged ?
                            <>
                                <h2>Recuperação de Senha</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-item-recovery-password form-item-input">
                                        <label>Digite sua nova senha</label>
                                        <FormInput {...formData.password}
                                            onTurnDirty={handleTurnDirty}
                                            onChange={handleInputChange} />
                                        <div className="form-error">{formData.password.message}</div>
                                    </div>
                                    <button onClick={handleSubmit}>Enviar</button>
                                </form>
                            </>
                            :
                            <>
                                <h2>Verifique seu Email</h2>
                                <p className="password-changed">Senha alterada com sucesso!</p>
                                <Link to="/">Fazer Login</Link>
                            </>
                    }
                </div>
            </section>
            {
                cardMessage && <CardMessage message={cardMessage} messageCardFunction={() => setCardMessage('')} />
            }
        </main>
    );
}