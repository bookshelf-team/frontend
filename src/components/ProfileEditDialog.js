import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextInputField from './TextInputField';

export default function ProfileEditDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        oldLogin: '',
        newLogin: '',
        username: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [changePassword, setChangePassword] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Редагування профілю</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Змініть дані профілю:
                    </DialogContentText>
                    <TextInputField
                        label="Старий логін"
                        name="oldLogin"
                        type="text"
                        value={formData.oldLogin}
                        onChange={handleChange}
                    />
                    <TextInputField
                        label="Новий логін"
                        name="newLogin"
                        type="text"
                        value={formData.newLogin}
                        onChange={handleChange}
                    />
                    {changePassword && (
                        <>
                            <TextInputField
                                label="Старий пароль"
                                name="oldPassword"
                                type="password"
                                value={formData.oldPassword}
                                onChange={handleChange}
                            />
                            <TextInputField
                                label="Новий пароль"
                                name="newPassword"
                                type="password"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                            <TextInputField
                                label="Підтвердіть свій новий пароль"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </>
                    )}
                    <Button onClick={() => setChangePassword(!changePassword)}>
                        Змінити пароль
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Скасувати
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Зберегти
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
