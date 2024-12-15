import { Link, useOutletContext } from "react-router-dom";
import CardMyDonation from "../../../../components/CardMyDonation";
import { useEffect } from "react";
import { UserDTO } from "../../../../models/User";

export default function MyDonations() {

    const context = useOutletContext<UserDTO>();

    useEffect(() => {

    });

    return (
        <div className="my-donations-list">
            <h2>Suas <span>Doações</span></h2>
            <div className="donations-plus-btn">
                <Link to="/community/donation-register">
                    Fazer Doação
                </Link>
            </div>
            {
                context.donations.map(donation => (
                    <CardMyDonation key={donation.id} donation={donation} />
                ))
            }

        </div>
    );
}