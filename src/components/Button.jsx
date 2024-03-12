import clsx from "clsx";

const Button = ({ type, onClick, children, disabled, outline, extraClassName, active, size, color, padding="px-5" }) => {
    const classNames = clsx(
            'nav-item',
            'btn',
            color &&  `btn-${color}`,
            outline && `btn-outline-${outline}`,
            size && `btn-${size}`,
            active && 'bg-primary text-cream',
            'text-uppercase',
            'matrice-extra-bold',
            extraClassName,
            {  "opacity-50 pe-none": disabled })
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={classNames} >
                {children}
            </button>
        </>
    );
};

export default Button;