import { Link } from "react-router-dom";
import CardMyDonation from "../../../../components/CardMyDonation";
import { useEffect, useState } from "react";
import { DonationMinDTO } from "../../../../models/donation";
import * as userService from '../../../../services/user-service';

export default function MyDonations() {

    const [myDonations, setMyDonations] = useState<DonationMinDTO[]>([]);

    useEffect(() => {
        userService.findMe().then((response) => {
            setMyDonations(response.data.donations);
        })
    }, []);

    return (
        <div className="my-donations-list">
            <h2>Suas <span>Doações</span></h2>
            <div className="donations-plus-btn">
                <Link to="/community/donation-register">
                    Fazer Doação
                </Link>
            </div>
            {
                myDonations.map(myDonation => (
                    <CardMyDonation key={myDonation.id} donation={myDonation} />
                ))
            }

        </div>
    );
}