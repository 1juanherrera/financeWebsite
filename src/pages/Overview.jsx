import { CreditCard, Header, Saved, Informs, Investment, Rates, TotalBudget, Transactions } from "../components"

export const OverView = () => {
    return (
            <div className="overview">
                <Header text='Overview' name='Juan'/> 
                <div className="overview__content">
                    <TotalBudget />
                    <Informs />
                    <Investment/>
                    <Transactions />
                    <div className="overview__content__flex">
                        <CreditCard />
                        <Saved />
                    </div>
                    <Rates />
                </div>
            </div>
    )
}


