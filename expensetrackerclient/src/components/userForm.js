import React, { useState } from 'react';

const UserForm = ({ onSubmit, isRegister }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {isRegister && (
                <div>
                    <label>Name:</label>
                    <input name="name" value={formData.name} onChange={handleChange} />
                </div>
            )}
            <div>
                <label>Email:</label>
                <input name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        </form>
    );
};

export default UserForm;
