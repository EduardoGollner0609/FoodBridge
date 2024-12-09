import { useState } from 'react';
import CardDonation from '../../../components/CardDonation';
import './styles.css';
import CardDonationDetails from '../../../components/CardDonationDetails';

export default function HomeCommunityPage() {

    const [donationDetailsVisible, setDonationDetailsVisible] = useState(false);

    function openDonationDetails() {
        setDonationDetailsVisible(true);
    }

    function closeDonationDetails() {
        setDonationDetailsVisible(false);
    }
    return (
        <>
            <main>
                <section id="section-home-community">
                    <div className="home-community-content container">
                        <div className="home-community-welcome">
                            <h2>Seja muito bem vindo, Eduardo</h2>
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
                            <CardDonation />
                            <CardDonation />
                            <CardDonation />
                            <CardDonation />
                            <CardDonation />
                            <CardDonation />
                            <CardDonation />
                            <CardDonation />
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