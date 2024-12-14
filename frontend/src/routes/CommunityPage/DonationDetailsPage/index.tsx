import { useEffect, useState } from 'react';
import './styles.css';
import * as donationService from '../../../services/donation-service';
import { useNavigate, useParams } from 'react-router-dom';
import { DonationDTO } from '../../../models/donation';
import CardDonationDetails from '../../../components/CardDonationDetails';


export default function DonationDetailsPage() {

    const params = useParams();

    const navigate = useNavigate();

    const [donation, setDonation] = useState<DonationDTO>();

    useEffect(() => {
        donationService.findById(Number(params.donationId)).then((response) => {
            setDonation(response.data);
        }).catch(() => {
            navigate("/community/home");
        })
    }, []);

    return (
        <main>
            <section id="section-donation-details-page">
                <div className="donation-details-page-content container">
                    {
                        donation && <CardDonationDetails donation={donation} />
                    }

                </div>

            </section></main>
    );
}