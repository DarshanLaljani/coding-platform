
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'

const SignOut = () => {
    const navigateTo = useNavigate(); // Initialize useHistory

    // Function to handle "Practice" button click
    const handleSignOut = async () => {
        try {
            // Make a POST request to the logout endpoint
            const resp = await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true, credentials: "include" });
            console.log(resp)

            // Show confirmation message
            alert('You have been signed out successfully!');

            // Navigate to the home page
            navigateTo('/');
        } catch (error) {
            console.error('Failed to sign out:', error);
            // Handle error if necessary
        }
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black to-purple-800">
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 max-w-md w-full space-y-4">
                <h2 className="text-4xl font-bold text-center text-white">Sign Out</h2>
                <p className="text-white text-center">Are you sure you want to sign out?</p>
                <div className="flex justify-center">
                    <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignOut;
