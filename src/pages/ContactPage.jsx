import Form from "../components/Form/Form";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="container">
            <h1 className="text-uppercase h2 weight-black col-8 pt-5">We thought you'd never ask! Let's talk!</h1>
            <p className="text-uppercase fs-md-5">What services are you interested in?</p>
            <Form/>
            {/* <Footer/> */}
        </div>
    );
};

export default ContactPage;