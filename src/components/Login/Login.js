import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { loginFunction } from "../../services/authService";


export default function Login() {

    const initialValues = {
        email: '',
        password: ''
    }
    const navigate = useNavigate();
    const { values, onChangeHandler } = useForm (initialValues);
 
    const onSubmitHandler = async (e) => {

        e.preventDefault();
        console.log("SUbmit");
        console.log(values);
        const response = await loginFunction(values);
        if (response.status === 200) {
            navigate('/')
        }else {
            
            // throw new Error()
            console.log("ERROR");
        }
       
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={values.email} onChange={onChangeHandler}/>

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={values.password} onChange={onChangeHandler}/>
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}