import { v4 as uuidv4 } from 'uuid';

const API_BASE_URL = 'http://saless-001-site1.atempurl.com';
export async function loginFunction(username, password) {
    const response = await fetch(`${API_BASE_URL}/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const user = await response.json();
        localStorage.setItem('token', user.id); 
        localStorage.setItem('role', user.role); 
        return user;
    }
    return false;
}

export async function SignupFunction(username, password, role) {
    let id = uuidv4();
    role = 0;
    const response = await fetch(`${API_BASE_URL}/api/User/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, username, password, role }),
    });

    if (response.ok) {
        const user = await response.json();
        localStorage.setItem('token', user.id); 
        localStorage.setItem('role', user.role); 
        return user;
    }
    return false;
}