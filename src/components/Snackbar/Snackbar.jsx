import React from "react";
import { Snackbar } from "@material-ui/core/Snackbar";

import MuiAlert from '@material-ui/lab/Alert';
import useStyle from './styles';

const custoSnackbar = ({ open, setOpen }) => {
    const classes = useStyle();

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') return;

        setOpen(fales);
    }

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={true}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">Transaction successfully created.</MuiAlert>

            </Snackbar>
            
        </div>
    )
}

export default Snackbar;