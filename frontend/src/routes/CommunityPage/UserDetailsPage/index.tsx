import { Link } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../../models/User';
import * as userService from '../../../services/user-service';
import CardMyDonation from '../../../components/CardMyDonation';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import CardDonation from '../../../components/CardDonation';
import Slider from '../../../components/Slider/slider';
import loadingIcon from '../../../assets/spinner-icon-animated.svg';


export default function UserDetailsPage() {

    const [user, SetUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe().then((response) => {
            SetUser(response.data);
        })
    }, []);

    function formatDate(birthDate: string | undefined) {
        if (birthDate === undefined) {
            return;
        }
        const [year, month, day] = birthDate.split('-');
        return `${day}/${month}/${year}`;
    }

    const settings: SwiperProps = {
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            clickable: true
        }
    }

    return (
        <main>
            {
                user ?
                    <>
                        <section id="user-details-page">
                            <div className="user-details-content container">
                                <h2>Seu <span>Perfil</span></h2>
                                <div className="card-user-details">
                                    <div className="card-user-details-links">
                                        <Link to="/community">
                                            Voltar
                                        </Link>
                                        <Link to="/">
                                            Editar
                                        </Link>
                                    </div>

                                    <div className="card-user-details-header">
                                        <h3>{user?.name}</h3>
                                        <p>Data de nascimento: {formatDate(user?.birthDate)}</p>
                                        <p>Número: {user?.phone}</p>
                                        <p>Cep: {user?.address}</p>
                                    </div>
                                    <div className="card-user-details-colaboration">
                                        <div className="card-user-details-donations">
                                            <h4>Doações: </h4>  <p>{user?.donations.length}</p>

                                        </div>
                                        <div className="card-user-details-delivery">
                                            <h4>Entregas: </h4> <p>{user?.donationsCollected.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="section-donations">
                            <div className="donations-content container">
                                <div className="my-donations">
                                </div>
                                <Slider settings={settings}>
                                    <SwiperSlide>
                                        <div className="donations-list">
                                            <div className="my-donations-title">
                                                <h3>Suas  <span>doações</span></h3>
                                            </div>
                                            {
                                                Number(user?.donations.length) > 0 ?
                                                    user?.donations.map(donation => (
                                                        <CardMyDonation key={donation.id} donation={donation} />
                                                    ))
                                                    :
                                                    <h4>Você não possui doações</h4>
                                            }
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="donations-collecteds-list">
                                            <div className="donations-collecteds-title">
                                                <h3>Doações  <span>coletadas</span></h3>
                                            </div>
                                            {
                                                Number(user?.donationsCollected.length) > 0 ?
                                                    user?.donationsCollected.map(donationColleted => (
                                                        <CardDonation key={donationColleted.id} donation={donationColleted} />
                                                    ))
                                                    :
                                                    <h4>Você não coletou nenhuma doação.</h4>
                                            }
                                        </div>
                                    </SwiperSlide>
                                </Slider>

                            </div>

                        </section>
                    </>
                    :
                    <div className="user-details-loading">
                        <img src={loadingIcon} alt="" />
                    </div>
            }

        </main >
    );
}