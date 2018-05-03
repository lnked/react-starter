const token = {
    set: (token) => localStorage.setItem('token', token),
    get: () => localStorage.getItem('token'),
    del: () => localStorage.removeItem('token')
}

export default token
