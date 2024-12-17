import './styles.css'

type Props = {
    message: string
}

export default function CardMessage({ message }: Props) {
    return (
        <div className="background-card-message">
            <div className="card-message">
                <button>Fechar</button>
                <p>    {message}</p>
            </div>
        </div>

    );
}