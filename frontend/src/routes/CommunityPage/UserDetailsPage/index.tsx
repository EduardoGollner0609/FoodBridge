import { Link, Outlet } from 'react-router-dom';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../../models/User';
import * as userService from '../../../services/user-service';


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
        const [year, month, day] = birthDate?.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
        <main>
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
                    <div className="donations-options-navegation">
                        <NavLink to="/community/user-details/my-donations" className={({ isActive }) =>
                            isActive ? "donations-option-navegation-active" : ""}>
                            <p>Minhas doações</p></NavLink>
                        <NavLink to="/community/user-details/donations-collecteds" className={({ isActive }) =>
                            isActive ? "donations-option-navegation-active" : ""}>
                            <p>Doações Coletadas</p>   </NavLink>
                    </div>
                    <Outlet context={user} />
                </div>

            </section>
        </main>
    );
}