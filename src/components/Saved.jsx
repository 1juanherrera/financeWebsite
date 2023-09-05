import add from '../assets/add.svg';
import dollarBlue from '../assets/dollarBlue.svg';
import pin from '../assets/pin.svg';
import coin from '../assets/coin.svg';

export const Saved = () => {
    return (
        <div className="saved">
            <div className="saved__header">
                    <h3 className="saved__header__text">Saved</h3>
                    <button className="saved__header__button">
                        <img src={ add } />
                    </button>
            </div>
            <div className='saved__deposit'>
                <div className='saved__deposit__circle'>
                    <img src={ dollarBlue } />
                </div>
                <div className='saved__deposit__text'>
                    <p className='saved__deposit__text__principal'>$100</p>
                    <p className='saved__deposit__text__dependent'>Today Deposit</p>
                </div>
                <div className='saved__deposit__pin'>
                    <img src={ pin } alt="" />
                </div>
            </div>
            <div className='saved__saving'>
                <div className='saved__saving__circle'>
                    <img src={ coin } />
                </div>
                <div className='saved__saving__deposit'>
                    <h3 className='saved__saving__deposit__number'><b>$</b>75,000</h3>
                    <p className='saved__saving__deposit__text'>Savings Target</p>
                </div>
            </div>  
        </div>
    )
}