const EmailMessage = ({ onMessageSent, message, setMessage }) => {

    return (
        <div>
            <form>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                />
            </form>
        </div>
    );
};

export default EmailMessage;
