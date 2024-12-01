import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

export interface ModalDialogProps {
    open: boolean;
    handleClose: () => void;
    deleteProduct: () => void;
}

export default function ModalDialog({ open, handleClose, deleteProduct }: ModalDialogProps) {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {" Modal de produto"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Você tem certeza que deseja deletar este produto?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button startIcon={<DeleteIcon />} onClick={() => deleteProduct()}>Deletar</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
