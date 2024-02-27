import FormInput from "./FormInput";
import FormOptions from "./FormOptions";
import FormTextArea from "./FormTextArea";
import Modal from "./Modal";
import { useFormik } from "formik";
import { formSubmit } from '../services/FormService';
import Button from "./Button";
import * as Yup from "yup";
import { useState } from "react";



const Form = () => {
    const [modal, setModal] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: [],
    }
    const formSchema = Yup.object({
        name: Yup.string("Name err").required("Required"),
        email: Yup.string("Email err").email("Invalid email").required("Required"),
        phone: Yup.string("Invalid phone").required("Required"),
        subject: Yup.string("Invalid subject").required("Required"),
        message: Yup.string("Invalid message").required("Required"),
        service: Yup.array()
            .of(Yup.string().required("Service ID is required"))
            .min(1, "At least one service is required")
            .required("Required"),
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
        onSubmit: (values, { resetForm }) => {
            formSubmit(values)
                .then(() => {
                    resetForm();
                    setModal(true);
                })
                .catch(err => console.error(err));
        },
    });

    console.log(values)

    return (
        <div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-6 px-3">
                    {touched.service && errors.service && "Elige un servicio pringada"}
                    <FormOptions
                        checked={values.service.includes('Communication')}
                        number="01"
                        title="Communication"
                        value='Communication'
                        onChange={handleChange}
                        name="service"
                        id="service"
                        type="checkbox" />
                    <FormOptions
                        checked={values.service.includes('Planning')}
                        number="02"
                        title="Planning"
                        value='Planning'
                        onChange={handleChange}
                        name="service"
                        id="service"
                        type="checkbox" />
                    <FormOptions
                        checked={values.service.includes('Marketing')}
                        number="03"
                        title="Marketing"
                        value="Marketing"
                        onChange={handleChange}
                        name="service"
                        id="service"
                        type="checkbox" />
                    <FormOptions
                        checked={values.service.includes('Social Media')}
                        number="04"
                        title="Social Media"
                        value="Social Media"
                        onChange={handleChange}
                        name="service"
                        id="service"
                        type="checkbox" />
                    <FormOptions
                        checked={values.service.includes('Design')}
                        number="05"
                        title="Design"
                        value="Design"
                        onChange={handleChange}
                        name="service"
                        id="service"
                        type="checkbox" />
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
                    <Button type="submit" outline="primary">
                        {isSubmitting ? "Submitting..." : "Send Message"}
                    </Button>
                </div>
            </form>
            {modal && <Modal onClose={() => setModal(false)} />}

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
