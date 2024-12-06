import './styles.css';

interface CardProps {
    imgUrl: string
    title: string
    description: string
}

export default function CardHelp({ imgUrl, title, description }: CardProps) {
    return (<div className="card-how-help-item">
        <div className="card-how-help-item-img">
            <img src={imgUrl} alt="" />
        </div>
        <div className="card-how-help-item-description">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="card-how-help-item-read-more-invite">
            <a href="">Saiba Mais</a>
        </div>
    </div>);
}