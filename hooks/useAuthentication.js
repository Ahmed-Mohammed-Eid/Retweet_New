const useAuthentication = async (token) => {
    try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await fetch(`${process.env.BASE_URL}/get/verify/token?token=${token}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        // COVERT RESPONSE TO JSON
        const responseJson = await response.json();

        if (response.ok) {
            return { authenticated: !!responseJson?.user, error: null, userData: responseJson?.user }; // Authenticated
        } else {
            return { authenticated: false, error: 'Authentication failed' }; // Not authenticated
        }
    } catch (error) {
        console.error('Error authenticating:', error);
        return { authenticated: false, error: 'An error occurred while authenticating' }; // An error occurred while authenticating
    }
};

export default useAuthentication;
