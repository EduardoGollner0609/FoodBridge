import './styles.css';
import { useEffect, useState } from 'react';
import CardDonation from '../../../components/CardDonation';
import * as donationService from '../../../services/donation-service';
import { Link } from 'react-router-dom';
import { DonationMinDTO } from '../../../models/donation';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';
import ButtonNextPage from '../../../components/ButtonNextPage';


type QueryParams = {
    page: number;
};

export default function HomeCommunityPage() {

    const [donations, setDonations] = useState<DonationMinDTO[]>([]);
    const [loading, setIsLoading] = useState<boolean>(false);
    const [donationsIsEmpty, setDonationsIsEmpty] = useState<boolean>(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
    });

    useEffect(() => {
        setIsLoading(true);
        donationService.findAllPaged(queryParams.page).then((response) => {
            setIsLoading(false);
            const nextPage = response.data.content;
            setDonations(donations.concat(nextPage));
            setIsLastPage(response.data.last);
            if (donations.length === 0) {
                setDonationsIsEmpty(true);
            }
        })
    }, [queryParams]);

    function handleNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    return (
        <main>
            <section id="section-home-community">
                <div className="home-community-content container">
                    <div className="home-community-welcome">
                        <h2>Seja muito bem vindo</h2>
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
                        {donations.length > 0 && (
                            donations.map((donation) => (
                                <CardDonation key={donation.id} donation={donation} />
                            ))
                        )
                        }
                        {loading && (
                            <div className="home-community-donations-list-loading">
                                <img src={loadingIcon} alt="Carregando..." />
                                <p>Buscando doações</p>
                            </div>
                        )}
                        {
                            donations.length <= 0 && !loading && donationsIsEmpty &&
                            <h3 className="zero-donations">Não temos doações disponiveis</h3>
                        }
                    </div>
                    {donations.length > 0 && !isLastPage && <ButtonNextPage onNextPage={handleNextPageClick} />}
                </div>
            </section>
        </main >


    );
}