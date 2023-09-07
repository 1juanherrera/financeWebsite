import dollar from '../assets/dollar.svg';
import dollarRed from '../assets/dollarRed.svg';
import dollarBlue from '../assets/dollarBlue.svg';
import LineUp from '../assets/lineUp.svg';

export const Informs = () => {

    const f = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
    });

    return (
        <div className="informs">
            <div className="informs__header">
                    <h3 className="informs__header__text">Reports</h3>
            </div>
            <div className='informs__content'>
                <div className='informs__content__incomes'>
                    <div className='informs__content__incomes__circle'>
                        <img src={ dollar } />
                    </div>
                    <div className='informs__content__incomes__text'>
                        <p className='informs__content__incomes__text__balance'>{f.format(10200)}</p>
                        <p className='informs__content__incomes__text__name'>Incomes</p>
                    </div>
                </div>

                <div className='informs__content__spent'>
                    <div className='informs__content__spent__circle'>
                        <img src={ dollarRed } />
                    </div>
                    <div className='informs__content__spent__text'>
                        <p className='informs__content__spent__text__balance'>{f.format(8325)}</p>
                        <p className='informs__content__spent__text__name'>Spent</p>
                    </div>
                </div>

                <div className='informs__content__saved'>
                    <div className='informs__content__saved__circle'>
                        <img src={ dollarBlue } />
                    </div>
                    <div className='informs__content__saved__text'>
                        <p className='informs__content__saved__text__balance'>{f.format(2350)}</p>
                        <p className='informs__content__saved__text__name'>Saved</p>
                    </div>
                </div>
            </div>
            <img className='informs__lineup' src={ LineUp } alt="" />
        </div>
    )
}