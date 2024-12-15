import './styles.css';
import { useOutletContext } from "react-router-dom";
import { UserDTO } from "../../../../models/User";
import CardDonation from "../../../../components/CardDonation";

export default function DonationsCollecteds() {

    const context = useOutletContext<UserDTO>();

    return (
        <>
            <div className="donations-collecteds-title">
                <h3>Doações <span>coletadas</span></h3>
            </div>

            <div className="donations-collecteds-list">

                {
                    context.donationsCollected.map(donationCollected => (
                        <CardDonation key={donationCollected.id} donation={donationCollected} />
                    ))
                }
            </div>
        </>

    );
}