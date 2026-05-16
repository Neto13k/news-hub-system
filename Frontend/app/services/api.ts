export async function UserLogin(email, password) {
    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        console.log('Success:', data);
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function UserRegister(name, email, password) {
    try {
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });
        const data = await response.json();
        console.log('Success:', data);
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('Success:', data);
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getPostById(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('Success:', data);
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function createPost(title, content, token ) {
    try {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        });
        const data = await response.json();
        console.log('Success:', data);
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}