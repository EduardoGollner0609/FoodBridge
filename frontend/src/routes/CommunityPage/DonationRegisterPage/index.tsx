import './styles.css';
import * as forms from '../../../utils/forms';
import * as donationService from "../../../services/donation-service";
import { useState } from 'react';
import TextAreaInput from '../../../components/TextAreaInput';
import FormInput from '../../../components/FormInput';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';

export default function DonationRegisterPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(formEmpty);

    const [loadingFormSubmit, setLoadingFormSubmit] = useState(false);

    function formEmpty() {
        return {
            description: {
                value: "",
                id: "description",
                name: "description",
                type: "text",
                placeholder: "Nos conte um pouco mais sobre a doação",
                validation: function (value: string) {
                    return /^(?!\s*$).+/.test(value);
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
        }
    }

    function handleClickConfirmHuman() {
        setFormData(forms.updateAndValidate(formData, formData.confirmHuman.name, "confirmado"));
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

        setLoadingFormSubmit(true);

        const requestBody = forms.toValues(formData);

        donationService.insertDonation(requestBody).then(() => {
            navigate("/community/home");
        }).catch((error) => {
            const newInputs = forms.setBackendErrors(formData, error.response.data.errors);
            setFormData(newInputs);
        })

        setFormData(formEmpty);

    }


    return (
        <main>
            <section id="section-donation-register">
                <div className="donation-register-content container">

                    {
                        loadingFormSubmit ?
                            <div className="register-donation-loading">
                                <div className="register-donation-loading-message">
                                    <img src={loadingIcon} alt="" />
                                    <p>Criando doação</p>
                                </div>

                            </div>
                            :
                            <div className="card-donation-register">
                                <Link to="/community">Voltar</Link>
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
                                            onChange={handleClickConfirmHuman}
                                            onTurnDirty={handleTurnDirty} />
                                        <p>Clique aqui para confirmar que é humano</p>
                                    </div>

                                    <div className="card-donation-register-btn-submit">
                                        <button type="submit" onClick={handleSubmit}>Enviar</button>
                                    </div>
                                </form>
                            </div>
                    }

                </div>
            </section>
        </main >
    );
}