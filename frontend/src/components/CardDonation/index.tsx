import './styles.css';

type Props = {
    openDetails: () => void
}

export default function CardDonation({ openDetails }: Props) {


    return (
        <div className="card-donation" onClick={openDetails}>
            <div className="card-donation-data">
                <h3>Eduardo Sousa Gollner</h3>
                <p>Cesta básica mais uma banana</p>
            </div>
            <p>Vitória, Espirito Santo</p>
        </div>
    );
}