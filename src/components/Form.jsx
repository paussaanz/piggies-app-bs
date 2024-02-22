import FormInput from "./FormInput";
import FormOptions from "./FormOptions";
import FormTextArea from "./FormTextArea";
import { useFormik } from "formik";
import { formSubmit } from '../services/FormService';
import Button from "./Button";
import * as Yup from "yup";
import { useState } from "react";



const Form = () => {
    const [message, setMessage] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
    }
    const formSchema = Yup.object({
        name: Yup.string("Name err").required("Required"),
        email: Yup.string("Email err").email("Invalid email").required("Required"),
        phone: Yup.string("Invalid phone").required("Required"),
        subject: Yup.string("Invalid subject").required("Required"),
        message: Yup.string("Invalid message").required("Required"),
        service: Yup.mixed().oneOf(['Communication', 'Planning', 'Marketing', 'Social Media', 'Branding'])
    });
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        setSubmitting,
        setFieldError,
    } = useFormik({
        initialValues: initialValues,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: formSchema,
        //No entiendo nada :)
        onSubmit: (values) => {
        //     const data = new FormData();
        //     Object.keys(values).forEach(keyValue => {
        //         data.append(keyValue, values[keyValue]);
        //    });
            formSubmit(values)
                .then(() => {
                    resetForm();
                    setMessage(true);
                })
                .catch(err => console.error(err));
        },
    });

    return (
        <div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-6 px-3">
                    <FormOptions 
                    number="01" 
                    title="Communication" 
                    value={values.service}
                    onChange={handleChange}
                    name="service"
                    id="service"
                    type="checkbox"
                    error={touched.service && errors.service} />
                    <FormOptions 
                    number="02" 
                    title="Planning" 
                    value={values.service}
                    onChange={handleChange}
                    name="service"
                    id="service"
                    type="checkbox"
                    error={touched.service && errors.service} />
                    <FormOptions 
                    number="03" 
                    title="Marketing" 
                    value={values.service}
                    onChange={handleChange}
                    name="service"
                    id="service"
                    type="checkbox"
                    error={touched.service && errors.service} />
                    <FormOptions 
                    number="04" 
                    title="Social Media" 
                    value={values.service}
                    onChange={handleChange}
                    name="service"
                    id="service"
                    type="checkbox"
                    error={touched.service && errors.service} />
                    <FormOptions 
                    number="05" 
                    title="Design" 
                    value={values.service}
                    onChange={handleChange}
                    name="service"
                    id="service"
                    type="checkbox"
                    error={touched.service && errors.service} />
                </div>
                <div className="col-6 py-5 px-3">
                    <div className="row">
                        <div className="col-6 py-3">
                            <FormInput
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                error={touched.name && errors.name}
                                placeholder="NAME"
                            />
                        </div>
                        <div className="col-6 py-3">
                            <FormInput
                                id="email"
                                name="email"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={touched.email && errors.email}
                                placeholder="EMAIL"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 py-3">
                        <FormInput
                                id="phone"
                                name="phone"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                error={touched.phone && errors.phone}
                                placeholder="PHONE"
                            />
                        </div>
                        <div className="col-6 py-3">
                        <FormInput
                                id="subject"
                                name="subject"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subject}
                                error={touched.subject && errors.subject}
                                placeholder="SUBJECT"
                            />
                        </div>
                    </div>
                    <div className="row py-3">
                    <FormTextArea
                                id="message"
                                name="message"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                error={touched.message && errors.message}
                                placeholder="MESSAGE"
                            />
                    </div>
                </div>
                <div className="text-center py-5">
                    <Button type="submit">
                        {isSubmitting ? "Submitting..." : "Send Message"}
                    </Button>
                </div>
            </form>
            <div className="row py-5 justify-content-between">
                <div className="col-4">
                    <h5 className="text-uppercase text-primary weight-regular fs-md-5"> Contact Info</h5>
                    <div className="pt-2 text-black weight-regular">
                        <p className="mb-0"> piggiescompany@example.com</p>
                        <p> +1 (555) 555-5555</p>
                    </div>
                </div>
                <div className="col-3">
                    <h5 className="text-uppercase text-primary weight-regular fs-md-5"> HQ</h5>
                    <p className="primary-color weight-regular mb-0 pt-2 col-8"> 567 Meadowbrook Avenue, Springland 98765</p>
                </div>
                <div className="col-3">
                    <h5 className="text-uppercase text-primary weight-regular fs-md-5"> FOLLOW US</h5>
                </div>
            </div>
        </div>

    );
};

export default Form;