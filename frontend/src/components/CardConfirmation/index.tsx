import './styles.css'

type Props = {
    message: string,
    confirmationCardFunction: () => void,
    operationCardFunction: () => void
}

export default function CardConfirmation({ message, confirmationCardFunction, operationCardFunction }: Props) {
    return (
        <div className="background-card-confirmation">
            <div className="card-confirmation">
                <button onClick={confirmationCardFunction}>Fechar</button>
                <p>{message}</p>
                <div className="card-confirmation-options">
                    <button onClick={operationCardFunction}>Sim</button>
                    <button onClick={confirmationCardFunction}>Não</button>
                </div>

            </div>
        </div>

    );
}