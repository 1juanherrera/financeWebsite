import add from '../assets/add.svg';
import wallet from '../assets/wallet.svg';
import { ModalBalance } from './ModalBalance';
import { useShowStore } from '../hooks/useShowStore';
import { useBalanceStore } from '../hooks/useBalanceStore';

export const TotalBudget = () => {

    const { isView, handleView } = useShowStore();
    const { balance } = useBalanceStore();

    const f = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
    });

    return (
        <>

        { isView && <ModalBalance /> }

        <div className="total-budget">
                <div className="total-budget__header">
                    <h3 className="total-budget__header__text">Total Budget</h3>
                    <button className="total-budget__header__button" onClick={ handleView }>
                        <img src={ add } />
                    </button>
                </div>
                <div className='total-budget__wallet'>
                    <div className='total-budget__wallet__circle'>
                        <img src={ wallet } />
                    </div>
                    <h3 className='total-budget__wallet__balance' style={{ color: balance == 0 ? '#C1C1C1' : 'white' }} >{ f.format(balance) }</h3>
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
        </>  
    )
}

