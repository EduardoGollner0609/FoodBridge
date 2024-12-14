import './styles.css';
import * as forms from '../../../utils/forms';
import { useState } from 'react';
import TextAreaInput from '../../../components/TextAreaInput';
import FormInput from '../../../components/FormInput';

export default function DonationRegisterPage() {
    const [formData, setFormData] = useState<any>({
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Nos conte um pouco mais sobre a doação",
            validation: function (value: string) {
                return /^.{9,200}$/.test(value);
            },
            message: "A descrição deve ter de 9 a 200 caracteres",
        },
        confirmHuman: {
            value: "",
            id: "confirmHuman",
            name: "confirmHuman",
            type: "radio",
            placeholder: "Confirme pra gente",
            validation: function (value: string) {
                return value.trim() === "confirmado";
            },
            message: "Confirme pfvr",
        },
    });

    function handleClickConfirmHuman() {
        setFormData(forms.updateAndValidate(formData, formData.confirmHuman.name, "confirmado"));
    }
    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
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


    }


    return (
        <main>
            <section id="section-donation-register">
                <div className="donation-register-content container">
                    <div className="card-donation-register">
                        <h2>Doação</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="card-donation-register-item">
                                <TextAreaInput {...formData.description}
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                />
                                <div className="form-error">{formData.description.message}</div>
                            </div>
                            <div className="card-donation-register-item-confirm-human">
                                <FormInput {...formData.confirmHuman}
                                    onClick={handleClickConfirmHuman}
                                    onTurnDirty={handleTurnDirty} />
                                <p>Clique aqui para confirmar que é humano</p>
                            </div>

                            <div className="card-donation-register-btn-submit">
                                <input type="submit" onClick={handleSubmit} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}