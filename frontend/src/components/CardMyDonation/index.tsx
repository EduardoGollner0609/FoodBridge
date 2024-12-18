import { useState } from 'react';
import deleteIcon from '../../assets/delete-icon.svg';
import loadingIcon from '../../assets/spinner-icon-animated.svg';
import { DonationMinDTO } from '../../models/donation';
import * as donationService from '../../services/donation-service';
import './styles.css';

type Props = {
    donation: DonationMinDTO
}

export default function CardMyDonation({ donation }: Props) {

    const [loadingDeleted, setLoadingDeleted] = useState(false);
    const [deletedSucess, setDeletedSucess] = useState(false);

    function handleDeleteClick() {
        setLoadingDeleted(true);
        donationService.deleteById(donation.id).then(() => {
            setLoadingDeleted(false);
            setDeletedSucess(true);
        }).catch(() => {

        });
    }

    function formatedDescription(description: string) {
        if (description.length > 30) {
            return description.slice(0, 30) + '...';
        }
        return description
    }

    return (
        <div className="card-my-donation">
            <div className="card-my-donation-data">
                <h3>{donation.userName}</h3>
                <p>{formatedDescription(donation.description)}</p>
            </div>

            <div className="card-my-donation-icons">
                {
                    deletedSucess == false && loadingDeleted == false &&
                    <div className="card-my-donation-icon-item" onClick={handleDeleteClick}>
                        <img src={deleteIcon} alt="" />
                        <p>Deletar</p>
                    </div>
                }
                {
                    loadingDeleted && <div className="card-my-donation-loading">
                        <img src={loadingIcon} alt="" />
                    </div>
                }
                {
                    deletedSucess && <p>Deletado</p>
                }


            </div>
        </div>
    );
}