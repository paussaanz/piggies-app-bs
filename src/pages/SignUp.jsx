import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { register } from '../services/AuthService';
import FormControl from "../components/Form/FormControl";
import Button from "../components/Button";
import * as Yup from "yup";
import FormInput from "../components/Form/FormInput";

const initialValues = {
  email: '',
  username: '',
  password: '',
  imageUrl: ''
}

const userSchema = Yup.object({
  email: Yup.string("Email err").email("Invalid email").required("Required"),
  username: Yup.string("Invalid username").required("Required"),
  password: Yup.string("Password err")
    .min(8, "Length invalid")
    .required("Required"),
  imageUrl: Yup.mixed().required('Required field')
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: userSchema,
    //No entiendo nada :)
    onSubmit: (values) => {
      const data = new FormData()
      Object.keys(values).forEach(keyValue => {
        data.append(keyValue, values[keyValue])
      })
      // console.log(data);
      register(data)
        .then(() => {
          navigate('/login')
        })
        .catch(err => console.error(err))
    },
  });

  return (
    <div className="container">
      <h1 className="text-uppercase h2 weight-bold pt-4 text-center">Get started</h1>

      <form onSubmit={handleSubmit}>
        <div className="col-6 offset-md-3">
          <FormControl
            text="Username"
            error={touched.username && errors.username}
            htmlFor="username"
          >
            <FormInput
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && errors.username}
              placeholder="Enter a username"
              type="username"
            />
          </FormControl>

          <FormControl
            text="Email"
            error={touched.email && errors.email}
            htmlFor="email"
          >
            <FormInput
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
              placeholder="Enter an email"
            />
          </FormControl>

          <FormControl
            text="Password"
            error={touched.password && errors.password}
            htmlFor="password"
          >
            <FormInput
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
              placeholder="Enter a password"
              type="password"
            />
            
          </FormControl>
          <FormControl
            id="file-signup-input"
            text="Profile Image"
            error={touched.imageUrl && errors.imageUrl}
            htmlFor="imageUrl"
          >
          <FormInput
            name="imageUrl"
            type="file"
            label="Add your photo"
            // value={values.avatar}
            error={touched.imageUrl && errors.imageUrl}
            onChange={(event) => {
              setFieldValue("imageUrl", event.currentTarget.files[0]);
            }}
            onBlur={handleBlur}
          />
            
          </FormControl>
          <div className="text-center">
            <Button
              outline="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;