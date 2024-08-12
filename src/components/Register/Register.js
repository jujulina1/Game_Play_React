import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { registerFunction } from "../../services/authService";




export default function Register() {


    const initialValues = {
        email: '',
        password: '',
        rePassword: ''
    }
    const { values, onChangeHandler } = useForm(initialValues);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // const response = await registerFunction(values);
        // const data = await response.json()
        try {
            const response = await registerFunction(values);
            console.log(response);
            const data = await response.json()

            if (values.password !== values.rePassword) {
               
                throw new Error("Password don't match")
            } else if (response.status === 200) {
                
                navigate('/')
            } else {
               
                throw new Error(data.message);
            }

        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" value={values.email} onChange={onChangeHandler} />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" value={values.password} onChange={onChangeHandler} />

                    <label htmlFor="rePassword">Confirm Password:</label>
                    <input type="password" name="rePassword" id="rePassword" value={values.rePassword} onChange={onChangeHandler} />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}