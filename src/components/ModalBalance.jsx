import { IoClose } from "react-icons/io5"
import { BsFillCalculatorFill } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { toggleView } from "../store/slices/show";
import { totalBalance } from "../store/slices/balance";

export const ModalBalance = () => {


    const dispatch = useDispatch();

    const addBalance = (e) => {
        e.preventDefault();

        dispatch(totalBalance(Number(e.target[0].value)))

        dispatch(toggleView())
    }

    console.log(totalBalance)

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content__header">
                <h3 className="modal__content__header__title">New balance</h3>
                <button onClick={ () => dispatch(toggleView()) }>
                    <IoClose />
                </button>
                </div>
                <form onSubmit={ (e) => addBalance(e) }>
                <div className="modal__content__balance">
                    <BsFillCalculatorFill />
                    <input
                    className="modal__content__balance__input" 
                    type="number" 
                    placeholder="$ 0.00" 
                    min='1' 
                    />
                </div>
                <button className="modal__content__button">Enviar</button>
                </form>
            </div>
        </div>
    )
}