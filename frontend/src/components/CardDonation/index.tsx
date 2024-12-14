import './styles.css';

type Props = {
    userName: string,
    description: string,
    city: string | undefined,
    state: string | undefined,
    openDetails: () => void,
}

export default function CardDonation({ userName, description, city, state, openDetails }: Props) {


    return (
        <div className="card-donation" onClick={openDetails}>
            <div className="card-donation-data">
                <h3>{userName}</h3>
                <p>{description}</p>
            </div>
            <p>{city}, {state}</p>
        </div>
    );
}