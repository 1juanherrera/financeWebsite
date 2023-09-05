import add from '../assets/add.svg';
import lock from '../assets/lock.svg';
import visa from '../assets/visa.svg';
import signal from '../assets/signal.svg';

export const CreditCard = () => {
    return (
        <div className="creditcard">
            <div className="creditcard__header">
                    <h3 className="creditcard__header__text">Credit Card</h3>
                    <button className="creditcard__header__button">
                        <img src={ add } />
                    </button>
            </div>
            <div className='creditcard__card'>
                <div className='creditcard__card__header'>   
                    <div className='creditcard__card__header__lock'>
                        <img src={ lock } />
                    </div>
                    <div className='creditcard__card__header__visa'>
                        <img src={ visa } />
                        <p className='creditcard__card__header__visa__text'>$???</p>
                    </div>
                </div>
                <div className='creditcard__card__footer'>
                    <div className='creditcard__card__footer__text'>
                        <p>John Doe</p>
                        <p>XXXXXXXXXXXXX</p>
                    </div>
                    <div className='creditcard__card__footer__signal'>
                        <img src={ signal } />
                    </div>
                </div>
            </div>
        </div>
    )
}
