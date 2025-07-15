import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export default function SignIn() {
    const [FieldState, setFieldState] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/Home')
    };



    return (
        <>
            <Box className='card'>
                <h1 className='cardTitle'>تسجيل الدخول</h1>
                {/* User name Feild */}
                <TextField
                    sx={{
                        mt: '30px', width: '80%', ml: 'auto', mr: 'auto'
                        ,'& .MuiInputBase-root': {
                            direction: 'rtl',
                        },
                        '& .MuiInputLabel-root': {
                            right: 20,
                            left: 'auto',
                            transformOrigin: 'top right',
                        },
                        '& .MuiInputLabel-shrink': {
                            transform: 'translate(-14px, -9px) scale(0.75)',
                        },
                        '& .MuiInputBase-input': {
                            textAlign: 'right',
                        },
                    }}
                    error={FieldState}
                    type='email'
                    id="userName"
                    label="اسم المستخدم"
                    variant="filled"
                    autoComplete='off'
                />


                {/* Password Feild */}
                <TextField

                    type='password'
                    sx={{
                        mt: '30px', mb: '30px', width: '80%', ml: 'auto', mr: 'auto'
                        ,'& .MuiInputBase-root': {
                            direction: 'rtl',
                        },
                        '& .MuiInputLabel-root': {
                            right: 20,
                            left: 'auto',
                            transformOrigin: 'top right',
                        },
                        '& .MuiInputLabel-shrink': {
                            transform: 'translate(-14px, -9px) scale(0.75)',
                        },
                        '& .MuiInputBase-input': {
                            textAlign: 'right',
                        },
                    }}
                    error={FieldState}
                    id="password"
                    label="كلمة المرور"
                    variant="filled"

                />


                {/* Sign in button */}
                <Button sx={{ width: '80%', ml: 'auto', mr: 'auto', mb: '2em', height: '3em' }} variant='contained'
                    onClick={() => {
                        handleSubmit();
                    }}>تسجيل الدخول</Button>


            </Box>
        </>
    )
}