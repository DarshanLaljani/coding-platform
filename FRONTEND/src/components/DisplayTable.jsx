import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function CodingQuestionForm() {
    const [questions, setQuestions] = useState([
        { id: 1, questionName: 'Question 1', difficultyLevel: 'easy', url: 'https://example.com/1', conceptType: 'Array' },
        { id: 2, questionName: 'Question 2', difficultyLevel: 'medium', url: 'https://example.com/2', conceptType: 'String' },
        { id: 3, questionName: 'Question 3', difficultyLevel: 'hard', url: 'https://example.com/3', conceptType: 'Sorting' }
    ]);
    const [editingQuestion, setEditingQuestion] = useState(null);
    const [formData, setFormData] = useState({
        questionName: '',
        difficultyLevel: '',
        url: '',
        conceptType: ''
    });

    const handleEdit = (question) => {
        setEditingQuestion(question);
        setFormData({
            questionName: question.questionName,
            difficultyLevel: question.difficultyLevel,
            url: question.url,
            conceptType: question.conceptType
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy action for testing
        console.log('Form submitted with data:', formData);
        // Update the question in the state
        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === editingQuestion.id) {
                    return { ...question, ...formData };
                }
                return question;
            });
        });
        // Clear editing state and form data
        setEditingQuestion(null);
        setFormData({
            questionName: '',
            difficultyLevel: '',
            url: '',
            conceptType: ''
        });
    };

    const handleDelete = (id) => {
        // Remove the question from the state
        setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== id));
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
            <div className="max-w-7xl w-full bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden p-6 text-gray-800">
                <h2 className="text-center text-2xl font-semibold mb-6">Predefined Questions</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-3 px-4">Question Name</th>
                                <th className="py-3 px-4">Difficulty Level</th>
                                <th className="py-3 px-4">URL</th>
                                <th className="py-3 px-4">Concept Type</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map(question => (
                                <tr key={question.id} className={`border-b border-gray-300 ${getColorClass(question.difficultyLevel)}`}>
                                    <td className="py-3 px-4">{question.questionName}</td>
                                    <td className="py-3 px-4">{question.difficultyLevel}</td>
                                    <td className="py-3 px-4"><a href={question.url} className="text-blue-500 hover:underline">{question.url}</a></td>
                                    <td className="py-3 px-4">{question.conceptType}</td>
                                    <td className="py-3 px-4">
                                        <button onClick={() => handleEdit(question)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                        <button onClick={() => handleDelete(question.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Edit form */}
                {editingQuestion && (
                    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                            <h2 className="text-center text-xl font-semibold mb-4">Edit Question</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="questionName">
                                        Question Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                        id="questionName"
                                        type="text"
                                        placeholder="Question Name"
                                        value={formData.questionName}
                                        onChange={(e) => setFormData({ ...formData, questionName: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="difficultyLevel">
                                        Difficulty Level
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                        id="difficultyLevel"
                                        value={formData.difficultyLevel}
                                        onChange={(e) => setFormData({ ...formData, difficultyLevel: e.target.value })}
                                    >
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                                        URL
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                        id="url"
                                        type="text"
                                        placeholder="URL"
                                        value={formData.url}
                                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conceptType">
                                        Concept Type
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                        id="conceptType"
                                        type="text"
                                        placeholder="Concept Type"
                                        value={formData.conceptType}
                                        onChange={(e) => setFormData({ ...formData, conceptType: e.target.value })}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Function to get color class based on difficulty level
const getColorClass = (difficultyLevel) => {
    switch (difficultyLevel) {
        case 'easy':
            return 'bg-green-200';
        case 'medium':
            return 'bg-yellow-200';
        case 'hard':
            return 'bg-red-200';
        default:
            return '';
    }
};

export default CodingQuestionForm;
