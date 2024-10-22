const useUserCountry = async () => {
    try {
        // Fetch country information based on IP address
        const response = await fetch(`${process.env.BASE_URL}/user/country`);
        const data = await response.json();

        if (data.country) {
            return { country: data.country, error: null }; // Country retrieved successfully
        } else {
            return { country: null, error: 'Unable to determine country' }; // Country not found
        }
    } catch (error) {
        console.error('Error fetching user country:', error);
        return { country: null, error: 'An error occurred while fetching user country' }; // An error occurred while fetching country
    }
};

export default useUserCountry;
