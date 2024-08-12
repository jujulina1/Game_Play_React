import { useState } from "react";


export function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);


    const onChangeHandler = (e) => {
       setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    return {
        values,
        onChangeHandler
    }
    
}