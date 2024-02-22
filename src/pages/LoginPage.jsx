import FormInput from "../components/FormInput";
import { useFormik } from 'formik';
import { string, object } from 'yup';
import Button from "../components/Button";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FormControl from "../components/FormControl";

const userSchema = object({
    username: string().required('Required field'),
    password: string().min(8, 'Password of at least 8 characters').required('Required field')
});

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, errors, touched, isValid, handleBlur, handleChange, isSubmitting, handleSubmit, setSubmitting } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            login(values)
                .then(() => {
                    navigate('/dashboard')
                })
                .catch((err) => {
                    console.log(err)
                    setSubmitting(false)
                })
        },
        validationSchema: userSchema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
    })

    return (
        <div className="container">
            <h1 className="text-uppercase h2 weight-bold pt-4 text-center">Log in</h1>

            <form onSubmit={handleSubmit}>
                <div className="col-6 offset-md-3">
                    <FormControl
                        text="Username"
                        error={touched.username && errors.username}
                        htmlFor="username">
                        <FormInput
                            name="username"
                            type="username"
                            label="Username"
                            placeholder="Enter your username"
                            value={values.username}
                            error={touched.username && errors.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormControl>
                    <FormControl
                        text="Password"
                        error={touched.password && errors.password}
                        htmlFor="password"
                    >
                        <FormInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={values.password}
                            error={touched.password && errors.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormControl>
                </div>
                <div className="text-center">
                    <Button
                        type="submit"
                    >
                        {isSubmitting ? "Submitting..." : "Log In"}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login;