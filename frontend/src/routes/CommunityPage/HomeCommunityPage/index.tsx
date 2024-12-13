import './styles.css';
import { useEffect, useState } from 'react';
import CardDonation from '../../../components/CardDonation';
import CardDonationDetails from '../../../components/CardDonationDetails';
import { UserDTO } from '../../../models/User';
import * as userService from '../../../services/user-service';


export default function HomeCommunityPage() {


    const [user, setUser] = useState<UserDTO>();

    const [donationDetailsVisible, setDonationDetailsVisible] = useState(false);

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
                                <h3>Veja as doações que estão em </h3>
                                <select name="" id="">
                                    <option value="opcao1">Minas Gerais</option>
                                    <option value="opcao2">Espirito Santo</option>
                                    <option value="opcao3">Rio de Janeiro</option>
                                    <option value="opcao4">São Paulo</option>
                                </select>
                            </div>
                            <div className="home-community-invite-donation">
                                <a href="">Doar agora</a>
                            </div>
                        </div>
                        <div className="home-community-donations-list">
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />
                            <CardDonation openDetails={openDonationDetails} />

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