import './styles.css'

type Props = {
    closeDetails: () => void
}

export default function CardDonationDetails({ closeDetails }: Props) {
    return (
        <div className="card-donation-details-background">
            <div className="card-donation-details">
                <div className="card-donation-details-close">
                   <h2>Doação</h2> <button onClick={closeDetails}>X fechar</button>
                </div>
                <div className="card-donation-details-header">

                    <p>Nome: Eduardo Sousa Gollner</p>
                    <p>Endereço: Vitória, Espirito Santo</p>
                    <p>Número: 27 992657127 <a href=""> Conversar</a></p>
                </div>
                <div className="card-donation-details-description">
                    <h4>Descrição:</h4>
                    <p>Estou doando uma cesta básica lacrado mais algumas bananas.</p>
                </div>
                <div className="card-donation-details-btn">
                    <button>Coletar</button>
                </div>
            </div>
        </div>

    );
}