import FormTextArea from "./Form/FormTextArea";

const EmailMessage = ({ onMessageSent, message, setMessage }) => {

    return (
        <div>
            <form>
                <FormTextArea
                    id="message"
                    name="message"
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    rows="1"
                    value={message}
                    placeholder="Enter your message"
                />
            </form>
        </div>
    );
};

export default EmailMessage;
