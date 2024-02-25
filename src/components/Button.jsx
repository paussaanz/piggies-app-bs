import clsx from "clsx";

const Button = ({ type, onClick, children, disabled, outline, extraClassName, active }) => {
    return (
        <div>
            <button type={type} onClick={onClick} className={clsx(`nav-item btn btn-outline-${outline} ${active && 'bg-primary text-cream'} text-uppercase matrice-extra-bold px-5`, extraClassName,
                {"opacity-50 pe-none": disabled })} >
                {children}
            </button>
        </div>
    );
};

export default Button;