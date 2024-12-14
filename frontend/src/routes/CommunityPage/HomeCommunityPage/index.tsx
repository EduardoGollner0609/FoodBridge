import './styles.css';
import { useEffect, useState } from 'react';
import CardDonation from '../../../components/CardDonation';
import CardDonationDetails from '../../../components/CardDonationDetails';
import { UserDTO } from '../../../models/User';
import * as userService from '../../../services/user-service';
import * as donationService from '../../../services/donation-service';
import { Link } from 'react-router-dom';
import { DonationDTO } from '../../../models/donation';


export default function HomeCommunityPage() {

    const [user, setUser] = useState<UserDTO>();

    const [donationDetailsVisible, setDonationDetailsVisible] = useState(false);

    const [donations, setDonations] = useState<DonationDTO[]>([]);

    function openDonationDetails() {
        setDonationDetailsVisible(true);
    }

    function closeDonationDetails() {
        setDonationDetailsVisible(false);
    }

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
        <>
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
                                    <CardDonation userName={donation.userName} description={donation.description} city={donation.city} state={donation.state} openDetails={openDonationDetails} />
                                )
                                )
                            }

                        </div>


                    </div>
                </section>
            </main >
            {
                donationDetailsVisible && <CardDonationDetails closeDetails={closeDonationDetails} />
            }
        </>

    );
}