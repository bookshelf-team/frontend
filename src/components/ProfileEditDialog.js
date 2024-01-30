import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextInputField from "./TextInputField";
import {useDispatch} from "react-redux";
import {updateProfileByUsername} from "../redux/profile/profileService";

export default function ProfileEditDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        oldLogin: '',
        newLogin: '',
        username: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        fullName: '',
        dateOfBirth: '',
        about: '',
        iconFile: null,
    });
    const [changePassword, setChangePassword] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;

        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSave = async () => {
        const username = formData.username;
        let data = await dispatch(updateProfileByUsername(username, formData));
        console.log(data);
        setTimeout(() => {
            handleClose();
        }, 1000);
    };

    const handleSavePassword = async () => {
        setChangePassword(false);
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)} sx={{ color: "white", marginRight: "40px" }}>Редагувати</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Редагування профілю</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Змініть дані профілю:
                    </DialogContentText>
                    <div style={{ marginBottom: '16px', marginTop: '16px', }}>
                        <label htmlFor="fullName">Прізвище та ім'я</label>
                        <TextInputField
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="dateOfBirth" style={{ marginRight: 6 }}>Дата народження (DD/MM/YYYY)</label>
                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="text"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="iconFile" style={{ marginRight: 6 }}>Додайте іконку</label>
                        <input
                            type="file"
                            accept="image/*"
                            id="iconFile"
                            name="iconFile"
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="about">Опис профілю</label>
                        <TextareaAutosize
                            id="about"
                            minRows={4}
                            placeholder="Опис профілю"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', resize: 'vertical', marginTop: 6 }}
                        />
                    </div>
                    {changePassword ? (
                        <>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="oldPassword">Старий пароль</label>
                                <TextInputField
                                    id="oldPassword"
                                    name="oldPassword"
                                    type="password"
                                    value={formData.oldPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="newPassword">Новий пароль</label>
                                <TextInputField
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="confirmPassword">Підтвердіть свій новий пароль</label>
                                <TextInputField
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <DialogActions>
                                <Button onClick={handleSavePassword} color="primary">
                                    Зберегти пароль
                                </Button>
                                <Button onClick={() => setChangePassword(false)} color="primary">
                                    Скасувати
                                </Button>
                            </DialogActions>
                        </>
                    ) : (
                        <Button onClick={() => setChangePassword(true)}>
                            Змінити пароль
                        </Button>
                    )}
                </DialogContent>
                {!changePassword && (
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Скасувати
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            Зберегти
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        </div>
    );
}
