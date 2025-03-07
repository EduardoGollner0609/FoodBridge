import { useState } from 'react';
import './styles.css';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import { Link } from 'react-router-dom';

export default function RecoveryPasswordPage() {

    const [passwordChanged, setPasswordChanged] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
            validation: function (value: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Email inválido"
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


    }

    return (
        <main>
            <section id="recovery-password-section">
                <div className="card-recovery-password">
                    {
                        !passwordChanged ?
                            <>
                                <h2>Recuperação de Senha</h2>
                                <form >
                                    <label>Digite sua nova senha</label>
                                    <FormInput {...formData.password}
                                        onTurnDirty={handleTurnDirty}
                                        onChange={handleInputChange} />
                                    <div className="form-error">{formData.password.message}</div>
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
        </main>
    );
}