import add from '../assets/add.svg';

export const Transactions = () => {
    return (
        <div className="transactions">
            <div className="transactions__header">
                    <h3 className="transactions__header__text">All transactions</h3>
                    <button className="transactions__header__button">
                        <img src={ add } />
                    </button>
            </div>
            <div className='transactions__content'>
                <p className='transactions__content__text'>Oops! You don't have any registered transactions this week.</p>
            </div>
        </div>
    )
}
