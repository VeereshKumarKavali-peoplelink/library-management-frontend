import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { signup } from '../../services/authService';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login: loginUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { token } = await signup(username, password);
            loginUser(token);
            navigate('/');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Signup</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Signup</Button>
            </form>
        </Container>
    );
};

export default Signup;
