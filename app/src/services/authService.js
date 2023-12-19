import * as request from './requester'

const baseUrl = 'http://localhost:3030/users';

export const login = (data) => {
    const user = request.post(`${baseUrl}/login`, data);

    return user;
}
export const register = (data) => {
    const user = request.post(`${baseUrl}/register`, data);

    return user;
}
export const logout = () => {
    const result = request.get(`${baseUrl}/logout`)

    return result;
}