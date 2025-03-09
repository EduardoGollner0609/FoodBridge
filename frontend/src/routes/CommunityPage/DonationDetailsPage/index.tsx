import { useEffect, useState } from 'react';
import './styles.css';
import * as donationService from '../../../services/donation-service';
import { useNavigate, useParams } from 'react-router-dom';
import { DonationDTO } from '../../../models/donation';
import CardDonationDetails from '../../../components/CardDonationDetails';
import CardMessage from '../../../components/CardMessage';
import * as userService from '../../../services/user-service';
import { CollectorId } from '../../../models/User';


export default function DonationDetailsPage() {

    const params = useParams();

    const navigate = useNavigate();

    const [donation, setDonation] = useState<DonationDTO>();

    const [messageCard, setMessageCard] = useState("");

    function collect() {
        
        const collector: CollectorId = {
            id: userService.getUserLogged()?.id
        }

        donationService.updateCollectDonation(donation?.id, collector).then(() => {
            setMessageCard("Agora essa doação é sua.");
        }).catch(error => {
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
                            donation && <CardDonationDetails donation={donation} collectFunction={collect} />
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