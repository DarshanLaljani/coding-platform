import React, { useState } from 'react';
import '../css/question.css';

function CodingQuestionForm() {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server or store locally)
        console.log(formData);
        // You can add additional logic here
    };

    return (
        <div>
            <h2>Coding Question Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Question Name:
                        <input
                            type="text"
                            name="questionName"
                            value={formData.questionName}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Difficulty Level:
                        <select
                            name="difficultyLevel"
                            value={formData.difficultyLevel}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        URL:
                        <input
                            type="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Concept Type:
                        <input
                            type="text"
                            name="conceptType"
                            value={formData.conceptType}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CodingQuestionForm;
