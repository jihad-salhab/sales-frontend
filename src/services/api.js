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
