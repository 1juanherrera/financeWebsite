import { useDispatch, useSelector } from 'react-redux';
import add from '../assets/add.svg';
import wallet from '../assets/wallet.svg';
import { totalBalance } from '../store/slices/balance/balanceSlice'; 
import { toggleShow } from '../store/slices/show';
import { useState } from 'react';

export const TotalBudget = () => {

    const [ addition, setAddition ] = useState(0);

    const { balance } = useSelector( state => state.balance );
    const { isShow } = useSelector( state => state.show );
    const dispatch = useDispatch()

    const f = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
    });

    const number = 5000


    return (
        <div className="total-budget">
                <div className="total-budget__header">
                    <h3 className="total-budget__header__text">Total Budget</h3>
                    <button className="total-budget__header__button" onClick={ () => dispatch(totalBalance(f.format(number))) }>
                        <img src={ add } />
                    </button>
                </div>
                <div className='total-budget__wallet'>
                    <div className='total-budget__wallet__circle'>
                        <img src={ wallet } />
                    </div>
                    <h3 className='total-budget__wallet__balance'>{balance}</h3>
                </div>
                <div className='total-budget__line-green'></div>
                <div className='total-budget__percents'>
                    <p>This week's incomes and expenses</p>
                    <div className='total-budget__percents__content'>
                        <div className='total-budget__percents__content__expense'>
                            <p>-15,74%</p>
                        </div>
                        <div className='total-budget__percents__content__income'>
                            <p>+17,23</p>
                        </div>
                    </div>
                </div>
        </div>  
    )
}

