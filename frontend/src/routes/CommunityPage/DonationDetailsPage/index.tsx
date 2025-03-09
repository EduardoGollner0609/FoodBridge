import { useEffect, useState } from 'react';
import './styles.css';
import * as donationService from '../../../services/donation-service';
import { useNavigate, useParams } from 'react-router-dom';
import { DonationDTO } from '../../../models/donation';
import CardDonationDetails from '../../../components/CardDonationDetails';
import CardMessage from '../../../components/CardMessage';
import * as userService from '../../../services/user-service';
import { CollectorId } from '../../../models/User';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';

export default function DonationDetailsPage() {

    const params = useParams();

    const navigate = useNavigate();

    const [donation, setDonation] = useState<DonationDTO>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [messageCard, setMessageCard] = useState("");

    function collect() {

        setIsLoading(true);

        const collector: CollectorId = {
            id: userService.getUserLogged()?.id
        }

        donationService.updateCollectDonation(donation?.id, collector).then(() => {
            setIsLoading(false);
            setMessageCard("Agora essa doação é sua.");
        }).catch(error => {
            setIsLoading(false);
            setMessageCard(error.response.data.message);
        });
    }

    function cardMessageClose() {
        setMessageCard("");
    }

    useEffect(() => {
        donationService.findById(Number(params.donationId)).then((response) => {
            setDonation(response.data);
        }).catch(() => {
            navigate("/community/home");
        })
    }, []);

    return (
        <>
            <main>
                <section id="section-donation-details-page">
                    <div className="donation-details-page-content container">
                        {
                            donation && !isLoading ? <CardDonationDetails donation={donation} collectFunction={collect} />
                                :
                                <div className="donation-register-loading">
                                    <img src={loadingIcon} alt="Carregando" />
                                    <p>Coletando doação...</p>
                                </div>
                        }
                    </div>
                </section>
            </main>
            {
                messageCard && <CardMessage message={messageCard} phone={donation?.user.phone} messageCardFunction={cardMessageClose} />
            }
        </>
    );
}