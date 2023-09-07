import { useDispatch, useSelector } from "react-redux"
import { toggleShow, toggleView } from "../store/slices/show"


export const useShowStore = () => {

    const { isView, isShow } = useSelector( state => state.show )

    const dispatch = useDispatch()

    const handleShow = () => {
        dispatch(toggleShow())
    }

    const handleView = () => {
        dispatch(toggleView())
    }

    return {
        //Properties
        isView,
        isShow,

        //Methods
        handleShow,
        handleView
    }
}