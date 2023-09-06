import { IoClose, IoColorPalette } from "react-icons/io5"
import { BsFillCalculatorFill } from "react-icons/bs"
import { CirclePicker } from "react-color";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShow } from "../store/slices/show";

export const Modal = () => {

    const [ currentColor, setCurrentColor ] = useState('#F44336')

    const dispatch = useDispatch();

    const appStyle = {
        background: currentColor,
        color: currentColor,
    }

    const changeColor = ( color ) => {
        setCurrentColor( color.hex );
    } 

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content__header">
                <h3 className="modal__content__header__title">New income</h3>
                <button onClick={ () => dispatch(toggleShow()) }>
                    <IoClose />
                </button>
                </div>
                <div className="modal__content__balance">
                    <BsFillCalculatorFill />
                    <input
                    className="modal__content__balance__input" 
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
                <div className="modal__content__icon">
                    <div className="modal__content__icon__category">

                    </div>
                </div>
                <button className="modal__content__button">Enviar</button>
            </div>
        </div>
    )
}
