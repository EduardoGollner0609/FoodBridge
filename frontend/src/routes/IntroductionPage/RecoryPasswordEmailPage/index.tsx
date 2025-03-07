import { useState } from 'react';
import './styles.css';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';

export default function RecoveryPasswordEmailPage() {

    const [formData, setFormData] = useState({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Email inválido"
        }
    });

    const [emailSet, setEmailSent] = useState<boolean>(false);

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


    }


    return (
        <main>
            <section id="recory-password-email-section">
                <div className="card-recovery-password-email">
                    {
                        !emailSet ?
                            <>
                                <h2>Recuperação de Senha</h2>
                                <form >
                                    <label>Digite seu Email</label>
                                    <FormInput {...formData.username}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange} />
                                    <div className="form-error">{formData.username.message}</div>
                                    <button onClick={handleSubmit}>Enviar</button>
                                </form>
                            </>
                            :
                            <>
                                <h2>Verifique seu Email</h2>
                                <p>Um email foi enviado para {formData.username.value}
                                    com instruções para definir uma nova senha</p>
                            </>
                    }

                </div>
            </section>
        </main>
    );
}