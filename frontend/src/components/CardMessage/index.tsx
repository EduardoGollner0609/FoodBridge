import './styles.css'

type Props = {
    message: string,
    messageCardFunction: () => void
}

export default function CardMessage({ message, messageCardFunction }: Props) {
    return (
        <div className="background-card-message">
            <div className="card-message">
                <button onClick={messageCardFunction}>Fechar</button>
                <p>{message}</p>
            </div>
        </div>

    );
}