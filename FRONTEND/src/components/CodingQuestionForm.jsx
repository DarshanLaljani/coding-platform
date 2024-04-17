import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@chakra-ui/react';
import CottageIcon from '@mui/icons-material/Cottage';

function CodingQuestionForm() {
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setErrorMessage] = useState('');

    // State to store form data
    const [formData, setFormData] = useState({
        questionName: '',
        difficultyLevel: '',
        url: '',
        conceptType: ''
    });

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to the backend API
            const response = await axios.post('http://localhost:5000/api/codingQuestions', formData, { withCredentials: true });
            console.log(response);

            // If the request is successful, show a toast notification
            if (response.status === 200) {
                setSuccessMessage("Data Saved Successfully")
                // Clear success message after 2 seconds
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            }
            // You can reset the form fields here if needed
            setFormData({
                questionName: '',
                difficultyLevel: '',
                url: '',
                conceptType: ''
            });
        } catch (error) {
            // If there's an error, show an error toast notification
            setErrorMessage("Failed to save data")
            // Clear success message after 2 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);

        }
    };

    return (
        <>

            <a href="/" className="absolute top-0 left-0p-2"><CottageIcon sx={{ fontSize: 40 }} style={{ marginLeft: '1rem', marginTop: '1rem' }} /></a>


            <div className="flex justify-center items-center h-screen" style={{ background: 'linear-gradient(to bottom, #000000 0%, #660066 100%)' }}>
                <div className="bg-black p-10 rounded-lg shadow-lg">
                    {error && <p className="mb-2 text-center text-red-600 text-lg font-bold">{error}</p>}
                    {successMessage && <p className="mb-2 text-center text-green-600 text-lg font-bold">{successMessage}</p>}
                    <h2 className="text-5xl font-bold mb-4 text-center text-white">Coding Question Form</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-white">Question Name:</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md outline-none"
                                type="text"
                                name="questionName"
                                value={formData.questionName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white">Difficulty Level:</label>
                            <select
                                className="w-full px-3 py-2 border rounded-md outline-none"
                                name="difficultyLevel"
                                value={formData.difficultyLevel}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white">URL:</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md outline-none"
                                type="url"
                                name="url"
                                value={formData.url}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white">Concept Type:</label>
                            <input
                                className="w-full px-3 py-2 border rounded-md outline-none"
                                type="text"
                                name="conceptType"
                                value={formData.conceptType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <button className="w-60 py-2 bg-purple-800 hover:bg-purple-600 text-white rounded-md transition duration-300" type="submit">Submit</button>
                        </div>
                        {/* <button className="w-60 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300" type="submit">Submit</button> */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default CodingQuestionForm;
