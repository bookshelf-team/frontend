import React from 'react';
import TextField from '@mui/material/TextField';

function TextInputField({ label, name, type, value, onChange }) {
    return (
        <TextField
            margin="dense"
            id={name}
            name={name}
            label={label}
            type={type}
            fullWidth
            variant="standard"
            value={value}
            onChange={onChange}
        />
    );
}

export default TextInputField;
