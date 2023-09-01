import React, { useState } from 'react';
import { SignupFunction } from '../../services/api';
import SignupFormTemplate from './SignupForm';
import { useNavigate } from 'react-router-dom';
const Signup = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSignup = async () => {
        if (!username || !password) {
            setErrorMessage('Please fill in both username and password.');
            return;
        }
        try {
            const user = await SignupFunction(username, password, role);
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
        <SignupFormTemplate
            username={username}
            password={password}
            role={role}
            setUsername={setUsername}
            setPassword={setPassword}
            setRole={setRole}
            handleSignup={handleSignup}
            errorMessage={errorMessage}
        />
    );
};

export default Signup;
