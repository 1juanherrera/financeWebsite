import { IoClose, IoColorPalette } from "react-icons/io5"
import { MdOutlineDescription } from "react-icons/md";
import { BsFillCalculatorFill } from "react-icons/bs"
import { CirclePicker } from "react-color";
import { useColorStore } from "../hooks/useColorStore";
import { useShowStore } from "../hooks/useShowStore";
import { useDataStore } from "../hooks/useDataStore";


export const ModalTransaction = () => {

    const { changeColor, appStyle, currentColor } = useColorStore(); 
    const { handleShow } = useShowStore();


    const { tempData, onInputChange, onResetForm, onSubmit } = useDataStore();



    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content__header">
                <h3 className="modal__content__header__title">New income</h3>
                <button onClick={ handleShow }>
                    <IoClose />
                </button>
                </div>
                <form onSubmit={ onSubmit }>
                <div className="modal__content__description">
                    <MdOutlineDescription />
                    <input type="text" 
                    name="description"
                    onChange={ onInputChange }
                    className="modal__content__description__input"
                    placeholder="Description"
                    />
                </div>
                <div className="modal__content__balance">
                    <BsFillCalculatorFill />
                    <input
                    onChange={ onInputChange }
                    className="modal__content__balance__input" 
                    name="price"
                    type="number" 
                    placeholder="$ 0.00" 
                    min='1' 
                    />
                </div>
                <div className="modal__content__color">
                    <div className="modal__content__color__category">
                        <IoColorPalette />
                        <p className="modal__content__color__category__title">Category color</p>
                        <span className="modal__content__color__category__select" style={ appStyle }></span>
                    </div>
                    <CirclePicker 
                    color={ currentColor }
                    onChangeComplete={ changeColor }    
                    />
                </div>
                <button className="modal__content__button">Enviar</button>
                </form>
            </div>
        </div>
    )
}
