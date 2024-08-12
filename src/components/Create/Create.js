import { useState } from "react";
import { create } from "../../services/dataService";
import {  useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function Create() {

    const navigate = useNavigate();
   

    const initialValues = { 
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
}

const { values, onChangeHandler } = useForm(initialValues)
    // const [values, setValues] = useState(initialValues);

    // const onChangeHandler = (e) => {

    //     setValues(state => ({...state, [e.target.name]: e.target.value}));
    //     // console.log(values);

    // }


    const onSubmitHandler = async (e) => {
        
        
        e.preventDefault();
        const response = await create(values);
        if (response.status === 200) {
           navigate('/')
        }else {
        console.log("EROOR");
        }
    
    }
 
    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmitHandler}>
            <div className="container">

                <h1>Create Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title..." value={values.title} onChange={onChangeHandler}/>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category..." value={values.category} onChange={onChangeHandler}/>

                <label htmlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" value={values.maxLevel} onChange={onChangeHandler}/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." value={values.imageUrl} onChange={onChangeHandler}/>

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary" value={values.summary} onChange={onChangeHandler}></textarea>
                <input className="btn submit" type="submit" value="Create Game"/>
            </div>
        </form>
    </section>
    )
    
}