import React from 'react';
import Button from './Button';

const AlertDialog = ({
    title,
    body,
    text_color,
    bg_color,
    cancelButton,
    acceptButton,
    body_weight
}) => {

    const justifyContent = cancelButton && acceptButton ? "flex-end" : "center"
    return (
        <div>
            <div className="AlertDialogOverlay" />
            <div className={`AlertDialogContent bg-${bg_color}`} >
                <div className={`h4 weight-${body_weight} text-center text-${text_color} pt-4 px-3 text-uppercase pb-4`}>{title}</div>
                {body && <div className=" text-center tag pt-2 pb-4" style={{ maxHeight: '380px', overflowY: 'auto' }}>
                    {body}
                </div>}
                <div className="pt-4" style={{ display: 'flex', gap: '25px', justifyContent: justifyContent }}>
                    {cancelButton && (
                        <Button
                            extraClassName="cancel-btn"
                            onClick={cancelButton.onClick}
                            type={cancelButton.type}
                            color={cancelButton.color}
                            outline={cancelButton.outline}
                        >
                            {cancelButton.text}
                        </Button>
                    )}
                    {acceptButton && (
                        <Button
                            active
                            onClick={acceptButton.onClick}
                            type={acceptButton.type}
                        >
                            {acceptButton.text}
                        </Button>
                    )}
                </div>

            </div>
        </div>
    )
};

export default AlertDialog;