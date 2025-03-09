import './styles.css'

type Props = {
    message: string,
    phone?: string,
    messageCardFunction: () => void
}

export default function CardMessage({ message, phone, messageCardFunction }: Props) {
    return (
        <div className="background-card-message">
            <div className="card-message">
                <button onClick={messageCardFunction}>Fechar</button>
                <p>{message}</p>
                {
                    (message === "Agora essa doação é sua." || message === "Essa doação já é sua.") &&
                    <div className="card-message-link-chat">
                        <a href={`https://api.whatsapp.com/send?phone=${phone}&text=Olá,%20tudo%20bem?%20vim%20do%20FoodBridge%20e%20gostaria%20de%20perguntar%20sobre%20uma%20doação%20feita%20por%20você.`}>Conversar</a>
                    </div>
                }
            </div>
        </div>

    );
}