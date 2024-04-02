import { useState } from "react";
import Button from "./Button";
// import Popper from 'popper.js';


const Dropdown = ({ gif, img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="btn-grup dropup w-100">
            <Button
                extraClassName="dropdown-tggle w-100 px-0"
                outline="black"
                type="button"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                data-bs-toggle="dropdown"
                data-bs-popper="static"
            >
                +
            </Button>
            <div className={`dropdown-menu${isOpen ? ' show' : ''} bottom-100 overflow-clip p-0`}>
                <div className="row">
                    <div className="col-12">
                        <div>
                            {gif}
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            {img}
                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Dropdown;