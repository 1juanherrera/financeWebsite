import { useDispatch, useSelector } from "react-redux";
import { totalBalance } from "../store/slices/balance";
import { toggleView } from "../store/slices/show";


export const useBalanceStore = () => {

    const dispatch = useDispatch();

    const { balance } = useSelector( state => state.balance );

    const addBalance = (e) => {
        e.preventDefault();

        dispatch(totalBalance(Number(e.target[0].value)))

        dispatch(toggleView())
    }

    return {
        //Properties
        balance,

        // Methods
        addBalance
    }
}