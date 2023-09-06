import { useDispatch } from 'react-redux';
import add from '../assets/add.svg';
import { toggleShow } from '../store/slices/show';

export const Transactions = () => {

    const dispatch = useDispatch();

    return (
        <div className="transactions">
            <div className="transactions__header">
                    <h3 className="transactions__header__text">All transactions</h3>
                    <button onClick={() => dispatch( toggleShow() ) } className="transactions__header__button">
                        <img src={ add } />
                    </button>
            </div>
            <div className='transactions__content'>
                <p className='transactions__content__text'>Oops! You don't have any registered transactions this week.</p>
            </div>
        </div>
    )
}
