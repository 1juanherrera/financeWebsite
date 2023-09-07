import { useDispatch, useSelector } from "react-redux"
import { changeCurrentColor } from "../store/slices/color";


export const useColorStore = () => {
    
    const dispatch = useDispatch();

    const { currentColor } = useSelector( state => state.currentColor )

    const appStyle = {
        background: currentColor,
        color: currentColor,
    }

    const changeColor = ( color ) => {
        dispatch(changeCurrentColor( color.hex ))
    }

    return {
        //Properties
        currentColor,
        appStyle,

        //Methods
        changeColor
    }
}