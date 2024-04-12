import Form from "../components/Form/Form";

const ContactPage = () => {
    return (
        <div className="container">
            <h1 className="text-uppercase h2 weight-black col-8 pt-5">We thought you'd never ask! Let's talk!</h1>
            <p className="text-uppercase legend">What services are you interested in?</p>
            <Form/>
        </div>
    );
};

export default ContactPage;