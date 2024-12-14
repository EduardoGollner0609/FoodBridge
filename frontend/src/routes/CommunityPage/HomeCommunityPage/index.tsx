import './styles.css';
import { useEffect, useState } from 'react';
import CardDonation from '../../../components/CardDonation';
import * as userService from '../../../services/user-service';
import * as donationService from '../../../services/donation-service';
import { Link } from 'react-router-dom';
import { DonationMinDTO } from '../../../models/donation';
import { UserMinDTO } from '../../../models/User';


export default function HomeCommunityPage() {

    const [user, setUser] = useState<UserMinDTO>();

    const [donations, setDonations] = useState<DonationMinDTO[]>([]);

    useEffect(() => {
        userService.findMe().then((response) => {
            setUser(response.data)
        });
    }, []);

    useEffect(() => {
        donationService.findAllPaged().then((response) => {
            setDonations(response.data.content);
        })
    }, []);

    return (

        <main>
            <section id="section-home-community">
                <div className="home-community-content container">
                    <div className="home-community-welcome">
                        <h2>Seja muito bem vindo {user?.name}</h2>
                    </div>
                    <div className="home-community-donations-header">
                        <div className="home-community-search-location">
                            <h3>Veja as doações que estão proximas de você</h3>
                        </div>
                        <div className="home-community-invite-donation">
                            <Link to="/community/donation-register">
                                Doar agora
                            </Link>
                        </div>
                    </div>
                    <div className="home-community-donations-list">
                        {
                            donations.map((donation) =>
                            (
                                <CardDonation key={donation.id} donation={donation} />
                            )
                            )
                        }

                    </div>


                </div>
            </section>
        </main >


    );
}