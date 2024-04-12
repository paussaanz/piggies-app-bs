import FormInput from "./FormInput";
import FormOptions from "./FormOptions";
import FormTextArea from "./FormTextArea";
import AlertDialog from "../AlertDialog";
import { useFormik } from "formik";
import { formSubmit, getServices } from '../../services/FormService';
import Button from "../Button";
import * as Yup from "yup";
import { useEffect, useState } from "react";

const Form = () => {
    const [services, setServices] = useState([]);
    const [showModal, setShowModal] = useState(false);


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
        service: Yup.array().min(1, "Required").required("Required"),

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
                    // setShowDialog(true);
                    setShowModal(true)
                })
                .catch(err => console.error(err));
        },
    });

    useEffect(() => {
        getServices()
            .then(response => {
                setServices(response)
            })
            .catch(err => console.error(err));
    }, []);

    // console.log(values)

    return (
        <div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-6 px-3">
                    {touched.service && errors.service && "Elige un servicio pringada"}
                    {
                        services.map((service, index) => (
                            <FormOptions
                                key={service._id}
                                checked={values.service.includes(service._id)}
                                number={`0${index + 1}`}
                                title={service.name}
                                value={service._id}
                                onChange={handleChange}
                                name="service"
                                id="service"
                                type="checkbox" />
                        ))
                    }
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
                            rows="10"
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

            {showModal && <AlertDialog
                bg_color="primary"
                text_color="cream"
                body_weight="extra-bold"
                title="Your message was sent succesfully"
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => setShowModal(false),
                    type: "submit",
                    outline: "cream"
                }}
                >
            </AlertDialog>}

        </div>

    );
};

export default Form;
