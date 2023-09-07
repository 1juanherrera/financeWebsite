import { IoClose } from "react-icons/io5"
import { BsFillCalculatorFill } from "react-icons/bs"
import { useBalanceStore } from "../hooks/useBalanceStore";
import { useShowStore } from "../hooks/useShowStore";

export const ModalBalance = () => {


    const { handleView } = useShowStore();
    const { addBalance } = useBalanceStore();

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content__header">
                <h3 className="modal__content__header__title">New balance</h3>
                <button onClick={ handleView }>
                    <IoClose />
                </button>
                </div>
                <form onSubmit={ addBalance }>
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