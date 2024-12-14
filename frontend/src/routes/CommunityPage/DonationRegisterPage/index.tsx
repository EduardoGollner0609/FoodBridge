import './styles.css';
import * as forms from '../../../utils/forms';
import { useState } from 'react';
import TextAreaInput from '../../../components/TextAreaInput';

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
    });

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }


    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }


    return (
        <main>
            <section id="section-donation-register">
                <div className="donation-register-content container">
                    <div className="card-donation-register">
                        <h2>Doação</h2>
                        <form >
                            <div className="card-donation-register-item">
                                <TextAreaInput {...formData.description}
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                />
                                <div className="form-error">{formData.description.message}</div>
                            </div>
                            <div className="card-donation-register-item-confirm-human">
                                <input type="radio" />
                                <p>Clique aqui para confirmar que é humano</p>
                            </div>
                            <div className="card-donation-register-btn-submit">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}