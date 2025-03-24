import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchDoctors = async (filters) => {
    try {
        const response = await API.get('/doctors', { params: filters });
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        return [];
    }
};

export const createAppointment = async (appointmentData) => {
    try {
        const response = await API.post('/appointments', appointmentData);
        return response.data;
    } catch (error) {
        console.error('Booking error:', error);
        throw error;
    }
};

export const fetchDoctor = async (doctorId) => {
    try {
        const response = await API.get(`/doctors/${doctorId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctor:', error);
        throw error;
    }
};


export const fetchUserAppointments = async (userId) => {
    try {
        const response = await API.get(`/appointments?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
};