import { useDispatch, useSelector } from "react-redux";
import { totalData } from "../store/slices/data/dataSlice";
import { toggleShow } from "../store/slices/show";

export const useDataStore = () => {

    const { tempData } = useSelector( state => state.data );

    const dispatch = useDispatch();

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        dispatch({
            ...totalData(),
            [ name ]: value
        })
    } 

    const onResetForm = () => {
        dispatch( totalData() );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(totalData(e.target[0].value))

        dispatch(toggleShow())

        console.log(tempData)
    }

    return {
        //Properties
        tempData,
        totalData,

        //Methods
        onInputChange,
        onResetForm,
        onSubmit

    }
}