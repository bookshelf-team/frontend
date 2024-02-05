import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextInputField from "./TextInputField";
import {useDispatch, useSelector} from "react-redux";
import {getProfileByUsername, updateProfileByUsername} from "../redux/profile/profileService";
import {changePasswordRequest} from "../redux/auth-reducer";
import {getUsernameFromLocalStorage} from "../redux/auth-utils";

export default function ProfileEditDialog() {
    const username = getUsernameFromLocalStorage();
    const profile = useSelector(state => state.profile.profile);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        "firstName": "",
        "lastName": "",
        "gender": null,
        "birthday": null,
        "phone": null,
        "address": null,
        "avatar": null,
        "language": null,
        "about": null,
    });
    const [changePassword, setChangePassword] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const {name, value, type, files} = event.target;
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

    useEffect(() => {
        if (open && username) {
            dispatch(getProfileByUsername(username));
        }
    }, [open, username, dispatch]);


    useEffect(() => {
        if (profile && username) {
            console.log('Edit', username);
            setFormData({
                "firstName": profile.firstName || "",
                "lastName": profile.lastName || "",
                "gender": profile.gender || null,
                "birthday": profile.birthday || null,
                "phone": profile.phone || null,
                "address": profile.address || null,
                "avatar": profile.avatar || null,
                "language": profile.language || null,
                "about": profile.about || null,
            });
        }
    }, [profile, username]);
    const handleSave = async () => {
        console.log("Saving profile with data:", formData);
        if (username) {
            await dispatch(updateProfileByUsername(username, formData));
        } else {
            let data = await dispatch(updateProfileByUsername(username, formData));
            console.log(data);
        }
        setTimeout(() => {
            handleClose();
        }, 1000);
    };

    const handleSavePassword = async () => {
        const username = localStorage.getItem("username");
        const oldPassword = localStorage.getItem("oldPassword");
        const newPassword = formData.newPassword;
        const confirmPassword = formData.confirmPassword;

        if (newPassword !== confirmPassword) {
            alert("Паролі не співпадають");
            return;
        }

        const changePasswordData = {
            username,
            oldPassword,
            newPassword,
        };

        try {
            const response = await changePasswordRequest(changePasswordData);
            alert(response);
            setChangePassword(false);
        } catch (error) {
            console.error("Помилка зміни паролю: ", error);
        }
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)} sx={{color: "white", marginRight: "40px"}}>Редагувати</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Редагування профілю</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Змініть дані профілю:
                    </DialogContentText>
                    <div style={{marginBottom: '16px', marginTop: '16px',}}>
                        <label htmlFor="firstName">Ім'я</label>
                        <TextInputField
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="lastName">Прізвище</label>
                        <TextInputField
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="gender">Стать</label>
                        <select style={{ marginLeft: '5px'}}
                            id="gender"
                            name="gender"
                            value={formData.gender || ""}
                            onChange={handleChange}
                        >
                            <option value="">Оберіть стать</option>
                            <option value="male">Чоловіча</option>
                            <option value="female">Жіноча</option>
                        </select>
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="birthday">Дата народження (DD/MM/YYYY)</label>
                        <input style={{ marginLeft: '5px'}}
                            id="birthday"
                            name="birthday"
                            type="text"
                            value={formData.birthday || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="phone">Телефон</label>
                        <TextInputField
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="address">Адреса</label>
                        <TextInputField
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="avatar">Посилання на аватар</label>
                        <TextInputField
                            id="avatar"
                            name="avatar"
                            type="text"
                            value={formData.avatar || ""}
                            placeholder="http://example.com/your-avatar.jpg"
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="language">Мова</label>
                        <TextInputField
                            id="language"
                            name="language"
                            type="text"
                            value={formData.language || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '16px'}}>
                        <label htmlFor="about">Опис профілю</label>
                        <TextareaAutosize
                            id="about"
                            minRows={4}
                            placeholder="Опис профілю"
                            name="about"
                            value={formData.about || ""}
                            onChange={handleChange}
                            style={{width: '100%', padding: '8px', resize: 'vertical', marginTop: 6}}
                        />
                    </div>
                    {changePassword ? (
                        <>
                            <div style={{marginBottom: '16px'}}>
                                <label htmlFor="oldPassword">Старий пароль</label>
                                <TextInputField
                                    id="oldPassword"
                                    name="oldPassword"
                                    type="password"
                                    value={formData.oldPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{marginBottom: '16px'}}>
                                <label htmlFor="newPassword">Новий пароль</label>
                                <TextInputField
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{marginBottom: '16px'}}>
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

                {changePassword && (
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Скасувати
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        </div>
    );
}
