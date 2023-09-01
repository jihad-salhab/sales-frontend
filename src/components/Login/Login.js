import React, { useState } from 'react';
import { loginFunction } from '../../services/api';
import LoginFormTemplate from './LoginForm';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!username || !password) {
            setErrorMessage('Please fill in both username and password.');
            return;
        }
        try {
            const user = await loginFunction(username, password);
            if (user) {
                console.log(user);
                setUser(user);
                // Fetch user details from API
                if (user.role === 0) {
                    navigate('/dashboard');
                } // Redirect to admin dashboard
                // } else {
                //     navigate('/agent-dashboard'); // Redirect to user dashboard
                // }
            } else {
                setErrorMessage('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <LoginFormTemplate
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            errorMessage={errorMessage}
        />
    );
};

export default Login;
