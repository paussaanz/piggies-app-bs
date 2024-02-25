import ReactDOM from "react-dom/client";
import './styles/Modal.scss'
import Button from "./Button";

const Modal = ({ onClose }) => {
    return (   
        <div className="main-modal-container row justify-content-center">
            <div className="main-modal-container__content col-6 bg-primary rounded-3">
                <p className="text-uppercase h3 text-cream weight-extra-bold p-5">Your message was sent succesfully</p>
                <div className="main-modal-container__content__actions">
                <Button onClick={onClose} outline="cream">Cerrar</Button>
                    </div>
            </div>
        </div>
    );
};


export default Modal;



