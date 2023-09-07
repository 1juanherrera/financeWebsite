import add from '../assets/add.svg';
import { ModalTransaction } from './ModalTransaction';
import { useShowStore } from '../hooks/useShowStore';

export const Transactions = () => {

   const { isShow, handleShow } = useShowStore();

    return (
        <>
        { isShow && <ModalTransaction /> } 
        <div className="transactions">
            <div className="transactions__header">
                    <h3 className="transactions__header__text">All transactions</h3>
                    <button onClick={ handleShow } className="transactions__header__button">
                        <img src={ add } />
                    </button>
            </div>
            <div className='transactions__content'>
                <p className='transactions__content__text'>Oops! You don't have any registered transactions this week.</p>
            </div>
        </div>
        </>
    )
}
