import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = useCallback(async(url, method = "GET", body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body){
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            };
            const respons = await fetch(url, { method, body, headers });
            const data = await respons.json();
            if (!respons.ok) {
                throw new Error(data.message); 
            };
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    }, []); 
    const clearError = useCallback(() => setError(null), []);
    return { loading, request, error, clearError };
};