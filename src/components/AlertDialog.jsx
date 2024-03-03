import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from './Button';

const AlertDialogDemo = ({ title, trigger, children, accept, cancel, bg_color, padding }) => {
const justifyContent = accept && cancel ? "flex-end" : "center"
return(
    <AlertDialog.Root>
        <AlertDialog.Trigger>
            {trigger}
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
            <AlertDialog.Overlay className="AlertDialogOverlay" />
            <AlertDialog.Content className={`AlertDialogContent bg-${bg_color}`} >
                <AlertDialog.Title className={`h5 weight-semi-bold text-center ${padding}`}>{title}</AlertDialog.Title>
                <AlertDialog.Description className=" text-center fs-6 pt-2 pb-4">
                    {children}
                </AlertDialog.Description>

                <div style={{ display: 'flex', gap: 25, justifyContent }}>
                    <AlertDialog.Cancel asChild>
                        {cancel}
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                       {accept}
                    </AlertDialog.Action>
                </div>

            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
    )
};

export default AlertDialogDemo;