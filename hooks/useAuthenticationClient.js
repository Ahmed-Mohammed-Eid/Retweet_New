"use client";
import { useState, useEffect } from 'react';

const useAuthenticationClient = (token) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const authenticate = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
                const response = await fetch(`${process.env.BASE_URL}/get/verify/token?token=${token}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    setAuthenticated(true);
                    setError(null);
                } else {
                    setAuthenticated(false);
                    setError('Authentication failed');
                }
            } catch (error) {
                console.error('Error authenticating:', error);
                setAuthenticated(false);
                setError('An error occurred while authenticating');
            }
        };

        // Only authenticate if a token is provided
        if (token) {
            authenticate();
        }
    }, [token]);

    return { authenticated, error };
};

export default useAuthenticationClient;
