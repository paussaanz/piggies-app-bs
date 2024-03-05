import React from 'react';
import Button from './Button';

const AlertDialog = ({ title, trigger, children, accept, cancel, bg_color, padding, onClose,onAccept }) => {
const justifyContent = accept && cancel ? "flex-end" : "center"
return(
    <div>
            <div className="AlertDialogOverlay" />
            <div className={`AlertDialogContent bg-cream`} >
                <div className={`h5 weight-semi-bold text-center ${padding}`}>LAKSNDLKANDLKASKDS</div>
                <div className=" text-center fs-6 pt-2 pb-4">
                    aslkfhaskhfklajfklasjlkfs
                </div>

                <div style={{ display: 'flex', gap: 25, justifyContent }}>
                    <Button  onClick={onClose}>
                       CANCEL
                    </Button>
                    <Button active onClick={onAccept} >
                      ACCEPT
                    </Button>
                </div>

            </div>
    </div>
    )
};

export default AlertDialog;