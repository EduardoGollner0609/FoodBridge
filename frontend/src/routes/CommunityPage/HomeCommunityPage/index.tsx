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
    const [isLastPage, setIsLastPage] = useState(false);
    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
    });

    useEffect(() => {
        donationService.findAllPaged(queryParams.page).then((response) => {
            const nextPage = response.data.content;
            setDonations(donations.concat(nextPage));
            setIsLastPage(response.data.last);
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
                        {
                            donations.length > 0 ?
                                donations.map((donation) =>
                                (
                                    <CardDonation key={donation.id} donation={donation} />
                                )
                                )
                                :
                                <div className="home-community-donations-list-loading">
                                    <img src={loadingIcon} alt="" />
                                </div>
                        }
                    </div>
                    {!isLastPage && <ButtonNextPage onNextPage={handleNextPageClick} />}
                </div>
            </section>
        </main >


    );
}