import React from 'react';
import UserForm from '../components/userForm';
import { login } from '../api';

const Login = () => {
    const handleLogin = async (formData) => {
        try {
            const response = await login(formData);
            console.log('Login successful:', response.data);
            // Optionally, save token to localStorage
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Error during login:', error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <UserForm onSubmit={handleLogin} isRegister={false} />
        </div>
    );
};

export default Login;
