import React from 'react';
import UserForm from '../components/userForm';
import { register } from '../api';

const Register = () => {
    const handleRegister = async (formData) => {
        try {
            const response = await register(formData);
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Error during registration:', error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <UserForm onSubmit={handleRegister} isRegister={true} />
        </div>
    );
};

export default Register;
