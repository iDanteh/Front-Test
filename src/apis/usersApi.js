import axiosInstance from './axiosInstance';

export const LoginCall = async (email, password) => {
    try {
        const response = await axiosInstance.post("/login", {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};